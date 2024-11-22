import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartProvider.jsx'
function ProductDetail() {
  const { id } = useParams() // Get product ID from URL params
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  // const handleAddToCart = () => {
  //   addItemToCart(product)
  // }

  // Fetch product details based on the id from the URL
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species-list?key=sk-TI3L67405b15611e57731`,
        )
        const selectedProduct = response.data.data.find(
          item => item.id === parseInt(id),
        )
        setProduct(selectedProduct)
      } catch (error) {
        console.error('Error fetching product details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductDetail()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='p-6'>
      {/* Product Detail Section with Image and Info side by side */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Left - Image */}
        <div className='flex justify-center'>
          <img
            src={product.default_image?.regular_url}
            alt={product.common_name}
            className='w-full h-auto max-w-sm object-cover rounded-lg shadow-lg'
          />
        </div>

        {/* Right - Product Information */}
        <div className='flex flex-col justify-start items-start space-y-4'>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Original Name: </span>
            {product.common_name}
          </p>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Scientific Name: </span>
            {product.scientific_name.join(', ')}
          </p>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Watering: </span>
            {product.watering}
          </p>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Cycle: </span>
            {product.cycle}
          </p>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Other Name: </span>
            {product.other_name ? product.other_name.join(', ') : 'N/A'}
          </p>
          <p className='text-lg font-semibold text-gray-800'>
            <span className='font-normal text-gray-600'>Price: </span>
            <span className='text-green-700 font-semibold'>Free</span>
          </p>

          {/* Add to Cart Button */}
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
