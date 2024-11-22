import {getUserByEmail, addUser} from '../db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    const { email, firstName, lastName, password } = req.body
   // Check if the email already exists

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  const newUser = { firstName, lastName, email, password: hashedPassword };
  await addUser(newUser);

  res.status(201).json({ message: 'User created successfully' });

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user._id }, // Payload (usually user ID or other data)
      process.env.JWT_SECRET_KEY,  // Secret key
      { expiresIn: '1h' }  // Expiry time for the token
    );
  
    res.cookie('token', token, {
      path:'/',
      httpOnly: true,  // JavaScript cannot access the cookie
      secure:true,
      maxAge: 3600000,  // Cookie expiry (1 hour here)
      sameSite: 'None',  // Helps prevent CSRF attacks
    });
    console.log('Cookie sent:', res.getHeader('Set-Cookie')); //debug
    res.send('Login successful');
}