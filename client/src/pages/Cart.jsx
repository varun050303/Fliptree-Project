// import React from 'react'
// import { useCart } from './CartContext'

// const Cart = () => {
//   const { cart, removeItemFromCart, updateCartQuantity } = useCart()

//   const handleRemoveItem = productId => {
//     removeItemFromCart(productId)
//   }

//   const handleQuantityChange = (productId, quantity) => {
//     updateCartQuantity(productId, quantity)
//   }

//   return (
//     <div className='p-6'>
//       <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map(item => (
//             <div
//               key={item.productId}
//               className='flex items-center justify-between p-4 border-b'
//             >
//               <div>
//                 <img
//                   src={item.default_image.small_url}
//                   alt={item.common_name}
//                   className='w-24 h-24 object-cover'
//                 />
//               </div>
//               <div className='flex-1 ml-4'>
//                 <h2 className='font-semibold'>{item.common_name}</h2>
//                 <p className='text-sm'>{item.scientific_name.join(', ')}</p>
//                 <div className='flex items-center mt-2'>
//                   <button
//                     onClick={() => handleRemoveItem(item.productId)}
//                     className='text-red-500 mr-4'
//                   >
//                     Remove
//                   </button>
//                   <input
//                     type='number'
//                     value={item.quantity}
//                     onChange={e =>
//                       handleQuantityChange(item.productId, e.target.value)
//                     }
//                     className='w-16 text-center'
//                   />
//                 </div>
//               </div>
//               <div className='ml-4'>
//                 <p className='font-semibold'>Price: Free</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart
