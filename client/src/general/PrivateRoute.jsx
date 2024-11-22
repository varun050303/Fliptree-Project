import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider.jsx'

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return children
}
