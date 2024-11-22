import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header/Header.jsx'
import ProductsShowCase from '../components/ProductsShowCase.jsx'
import { CartProvider } from '../context/CartProvider.jsx'
export default function Home() {
  return (
    <div className='container mx-auto'>
      <Header />
      <Banner />
      <ProductsShowCase />
    </div>
  )
}
