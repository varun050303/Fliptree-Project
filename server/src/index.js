import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = 3000;
import { authMiddleware } from './middleware/auth.middleware.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}))
app.use(helmet())

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};
app.use(loggerMiddleware);

// Route for checking authentication
app.get('/auth/check', authMiddleware, (req, res) => {
    res.json({ authenticated: true, user: req.user });
});

// Importing controllers for authentication and cart
import { registerUser, loginUser } from './controllers/auth.controller.js'
import { getUserCart, addItemToCart, removeItemFromCart, updateItemQuantityInCart } from './controllers/cart.controller.js'

// Authentication routes
app.use('/auth/register', registerUser); // Changed to POST for register
app.use('/auth/login', loginUser); // Changed to POST for login

// Cart routes
app.get('/cart/:userEmail', authMiddleware, getUserCart); // Use GET for fetching user's cart
app.post('/cart/add', authMiddleware, addItemToCart); // Add item to cart
app.delete('/cart/remove', authMiddleware, removeItemFromCart); // Remove item from cart
app.put('/cart/update', authMiddleware, updateItemQuantityInCart); // Update cart item quantity

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});