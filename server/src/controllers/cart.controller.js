// cartController.js
import { getCart, addToCart, removeFromCart, updateCartQuantity } from '../db.js'; // import your DB functions

// Get the user's cart
export const getUserCart = async (req, res) => {
    const { userEmail } = req.params;
    try {
        const cart = await getCart(userEmail);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error });
    }
};

// Add item to the user's cart
export const addItemToCart = async (req, res) => {
    const { userEmail, productId, quantity } = req.body;
    try {
        await addToCart(userEmail, productId, quantity);
        res.status(200).json({ message: "Item added to cart" });
    } catch (error) {
        res.status(500).json({ message: "Error adding item to cart", error });
    }
};

// Remove item from the user's cart
export const removeItemFromCart = async (req, res) => {
    const { userEmail, productId } = req.body;
    try {
        await removeFromCart(userEmail, productId);
        res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).json({ message: "Error removing item from cart", error });
    }
};

// Update item quantity in the cart
export const updateItemQuantityInCart = async (req, res) => {
    const { userEmail, productId, newQuantity } = req.body;
    try {
        await updateCartQuantity(userEmail, productId, newQuantity);
        res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating cart", error });
    }
};