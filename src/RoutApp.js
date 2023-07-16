import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routcomponent/Home'
import About from './routcomponent/About'
import { Navbar } from './routcomponent/Navbar'
import { OrderSummery } from './routcomponent/OrderSummery'
import { NoMatch } from './routcomponent/NoMatch'

function RoutApp() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='order-summary' element={<OrderSummery/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </>
  )
}

export default RoutApp