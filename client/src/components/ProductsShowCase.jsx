import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductsShowCase() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://perenual.com/api/species-list?key=sk-TI3L67405b15611e57731',
        )
        setData(response.data.data) // Store the data into state
        setLoading(false) // Stop loading after fetching data
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSeeMoreClick = id => {
    navigate(`/product/${id}`)
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Product Showcase</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data &&
          data.map(item => (
            <div
              key={item.id}
              className='border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <img
                src={item.default_image?.regular_url}
                alt={item.common_name}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>
                {item.common_name}
              </h3>
              <p className='text-sm text-gray-500'>
                {item.scientific_name.join(', ')}
              </p>

              {/* Details */}
              <div className='flex justify-between mt-2 text-sm text-gray-600'>
                <p>Watering: {item.watering}</p>
                <p>Price: Free</p>
              </div>
              <div className='flex justify-between mt-2 text-sm text-gray-600'>
                <p>Cycle: {item.cycle}</p>
              </div>

              {/* See More Button */}
              <div className='mt-4'>
                <button
                  className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'
                  onClick={() => handleSeeMoreClick(item.id)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
