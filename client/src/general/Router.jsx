import { Route, Routes } from 'react-router-dom'
import { RoutePaths } from './RoutePaths.jsx'
import Home from '../pages/Home.jsx'
import { NotFound } from './NotFound.jsx'
import { Layout } from './Layout.jsx'
import SignUp from '../pages/SignUp.jsx'
import Login from '../pages/Login.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'
import { AuthProvider } from '../context/AuthProvider.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
export const Router = () => (
  <AuthProvider>
    <Routes>
      <Route
        path={RoutePaths.SIGNUP}
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />

      <Route
        path={RoutePaths.LOGIN}
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />

      <Route
        path={RoutePaths.HOME}
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path={RoutePaths.PRODUCTDETAIL}
        element={
          <PrivateRoute>
            <Layout>
              <ProductDetail />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path='*'
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  </AuthProvider>
)
