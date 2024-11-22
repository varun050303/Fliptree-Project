import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// Set up LowDB with the corrected path
const defaultData = { users: [],cart: [] };
const db = new Low(new JSONFile(join(__dirname, '../db.json')), defaultData);

async function initDB() {
    try {
        await db.read();
        db.data ||= { users: [], cart: [] };
        await db.write();
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

async function addUser(user) {
    try {
        await db.read();
        db.data.users.push(user);
        await db.write();
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

async function getUserByEmail(email) {
    try {
        await db.read();
        return db.data.users.find(user => user.email === email);
    } catch (error) {
        console.error("Error fetching user by email:", error);
    }
}

// Get a user's cart
async function getCart(userEmail) {
    try {
        await db.read();
        const user = db.data.users.find(u => u.email === userEmail);
        return user ? user.cart || [] : [];
    } catch (error) {
        console.error("Error fetching cart:", error);
    }
}

// Add an item to the user's cart
async function addToCart(userEmail, productId, quantity) {
    try {
        await db.read();
        let user = db.data.users.find(u => u.email === userEmail);
        
        if (!user) {
            console.log("User not found");
            return;
        }
        
        if (!user.cart) user.cart = [];
        
        // Check if the product is already in the cart
        const existingItem = user.cart.find(item => item.productId === productId);
        if (existingItem) {
            // If product exists, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If product doesn't exist, add it
            user.cart.push({ productId, quantity });
        }

        await db.write();
        console.log("Item added to cart");
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}

// Remove an item from the user's cart
async function removeFromCart(userEmail, productId) {
    try {
        await db.read();
        const user = db.data.users.find(u => u.email === userEmail);
        
        if (!user || !user.cart) {
            console.log("Cart is empty or user not found");
            return;
        }

        user.cart = user.cart.filter(item => item.productId !== productId);
        await db.write();
        console.log("Item removed from cart");
    } catch (error) {
        console.error("Error removing from cart:", error);
    }
}

// Update the quantity of an item in the cart
async function updateCartQuantity(userEmail, productId, newQuantity) {
    try {
        await db.read();
        const user = db.data.users.find(u => u.email === userEmail);

        if (!user || !user.cart) {
            console.log("Cart is empty or user not found");
            return;
        }

        const item = user.cart.find(item => item.productId === productId);
        if (item) {
            item.quantity = newQuantity;
            await db.write();
            console.log("Cart updated");
        } else {
            console.log("Item not found in cart");
        }
    } catch (error) {
        console.error("Error updating cart:", error);
    }
}

export { initDB, addUser, getUserByEmail, getCart, addToCart, removeFromCart, updateCartQuantity };