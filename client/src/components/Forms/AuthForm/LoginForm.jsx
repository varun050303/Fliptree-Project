import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Input from '../Input'
import { useAuth } from '../../../context/AuthProvider'

const LoginForm = () => {
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        formData,
        {
          withCredentials: true, // This ensures cookies are handled
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // If login is successful, navigate to home
      if (response.status === 200) {
        setIsAuthenticated(true)
        navigate('/home')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid username or password')
    }
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-6 w-full'>
        {error && (
          <div className='p-3 text-red-500 bg-red-50 rounded-lg mb-4'>
            {error}
          </div>
        )}

        <Input
          id='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleChange}
          className='bg-gray-50/50'
          required
        />

        <Input
          id='password'
          type='password'
          label='Password'
          value={formData.password}
          onChange={handleChange}
          className='bg-gray-50/50'
          required
        />

        <div className='grid grid-cols-2 gap-4 mt-6'>
          <button
            type='button'
            className='px-4 py-2.5 text-gray-600 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors duration-200'
          >
            Change method
          </button>

          <button
            type='submit'
            className='px-4 py-2.5 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
