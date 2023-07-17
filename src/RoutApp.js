import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routcomponent/Home'
//import About from './routcomponent/About'

import { Navbar } from './routcomponent/Navbar'
import { OrderSummery } from './routcomponent/OrderSummery'
import { NoMatch } from './routcomponent/NoMatch'
import { Products } from './routcomponent/Products'
import { FeatureProduct } from './routcomponent/FeatureProduct'
import { NewProduct } from './routcomponent/NewProduct'
import { Users } from './routcomponent/Users'
import { UserDetails } from './routcomponent/UserDetails'
import { Admin } from './routcomponent/Admin'
import { Profile } from './routcomponent/Profile'

const LazyAbout = React.lazy(()=>import('./routcomponent/About'))

function RoutApp() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={
        <React.Suspense fallback='Loading...'>
          <LazyAbout/>
        </React.Suspense>
      
      }></Route>
      <Route path='order-summary' element={<OrderSummery/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeatureProduct/>}></Route>
        <Route path='featured' element={<FeatureProduct/>}></Route>
        <Route path='new' element={<NewProduct/>}></Route>
      </Route>
      <Route path='users' element={<Users/>}>
      <Route path=':userId' element={<UserDetails/>}/>
      <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </>
  )
}

export default RoutApp