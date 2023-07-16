import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routcomponent/Home'
import About from './routcomponent/About'
import { Navbar } from './routcomponent/Navbar'
import { OrderSummery } from './routcomponent/OrderSummery'
import { NoMatch } from './routcomponent/NoMatch'
import { Products } from './routcomponent/Products'
import { FeatureProduct } from './routcomponent/FeatureProduct'
import { NewProduct } from './routcomponent/NewProduct'

function RoutApp() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='order-summary' element={<OrderSummery/>}/>
      <Route path='products' element={<Products/>}>
        <Route path='featured' element={<FeatureProduct/>}></Route>
        <Route path='new' element={<NewProduct/>}></Route>
      </Route>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </>
  )
}

export default RoutApp