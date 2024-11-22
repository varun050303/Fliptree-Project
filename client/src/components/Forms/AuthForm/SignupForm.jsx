import React, { useState } from 'react'
import Input from '../Input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider'
const SignupForm = () => {
  const { setIsAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleChange = e => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }))
  }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('signup function called', formData)
    try {
      // Send POST request to backend for registration
      const response = await axios.post(
        'http://localhost:3000/auth/register',
        formData,
      )
      console.log(response)

      if (response.status === 201) {
        setIsAuthenticated(true)
        navigate('/home') // Redirect to Home page on successful login
      }

      return response
    } catch (err) {
      setError('Registration failed, please try again.' + err)
      console.log(error)
    }
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-6 w-fit'>
        {/* Name Fields Row */}
        <div className='grid grid-cols-2 gap-4'>
          <Input
            id='firstName'
            label='First Name'
            value={formData.firstName}
            onChange={handleChange}
            className='bg-gray-50/50'
          />

          <Input
            id='lastName'
            label='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className='bg-gray-50/50'
          />
        </div>

        {/* Email Field */}
        <Input
          id='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleChange}
          className='bg-gray-50/50'
        />

        {/* Password Field */}
        <Input
          id='password'
          type='password'
          label='Password'
          value={formData.password}
          onChange={handleChange}
          className='bg-gray-50/50'
        />

        {/* Buttons Row */}
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
            Create account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
