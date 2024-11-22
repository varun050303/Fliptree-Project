import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { createContext, useEffect } from 'react'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/check', {
        withCredentials: true,
      })
      setIsAuthenticated(response.data.authenticated)
    } catch (error) {
      setIsAuthenticated(false)
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
