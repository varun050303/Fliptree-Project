import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const getUserEmail = () => {
    const token = Cookies.get('token') // Get the token from the cookie
    if (token) {
      const decodedToken = jwtDecode(token) // Decode the token to get user data
      return decodedToken.email // Access the user's email from the decoded token
    }
    return null // If no token, return null
  }

  const userEmail = getUserEmail()

  // Fetch cart data when the component mounts
  useEffect(() => {
    if (userEmail) {
      async function fetchCart() {
        try {
          const response = await axios.get(
            `http://localhost:3000/cart/${userEmail}`,
            { withCredentials: true },
          )
          setCart(response.data)
        } catch (error) {
          console.error('Error fetching cart data', error)
        }
      }
      fetchCart()
    }
  }, [userEmail])

  // Function to add item to cart
  const addItemToCart = async product => {
    try {
      await axios.post(
        'http://localhost:3000/cart/add',
        {
          userEmail: `${userEmail``}`,
          productId: product.id,
          quantity: 1,
        },
        { withCredentials: true },
      )
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }])
    } catch (error) {
      console.error('Error adding item to cart', error)
    }
  }

  // Function to remove item from cart
  const removeItemFromCart = async productId => {
    try {
      await axios.delete('http://localhost:3000/cart/remove', {
        data: { userEmail: 'user@example.com', productId },
      })
      setCart(prevCart => prevCart.filter(item => item.productId !== productId))
    } catch (error) {
      console.error('Error removing item from cart', error)
    }
  }

  // Function to update item quantity in cart
  const updateCartQuantity = async (productId, quantity) => {
    try {
      await axios.put('http://localhost:3000/cart/update', {
        userEmail: 'user@example.com',
        productId,
        newQuantity: quantity,
      })
      setCart(prevCart =>
        prevCart.map(item =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      )
    } catch (error) {
      console.error('Error updating item quantity', error)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
