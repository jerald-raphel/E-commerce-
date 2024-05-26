import React from 'react'
import Navbar from '../Navbar/navbar'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from '../../pages/shop'
//import Shopcategory from '../../pages/shopcategoryhopcategory'
import Product from '../../pages/product'
import Cart from '../../pages/cart'
import Loginsignup from '../../pages/loginsignup'

const Home = () => {
  return (
    <div>
       <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/shop' element={<Shop/>}/>
      {/* <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory  banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory  banner={kid_banner} category="kid"/>}/>  */}
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home
