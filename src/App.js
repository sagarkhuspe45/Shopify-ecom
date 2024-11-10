import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Component/Nav'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import Footer from './Component/Footer'
import Beauty from './Pages/Category/Beauty'
import Furniture from './Pages/Category/Furniture'
import Fragrances from './Pages/Category/Fragrances'
import Login from './Pages/Login'
import Groceries from './Pages/Category/Groceries'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Login' element={<Login/>}/>
      

      <Route path='/Beauty' element={<Beauty/>}/>      
      <Route path='/Fragrances' element={<Fragrances/>}/>      
      <Route path='/Furniture' element={<Furniture/>}/>
      <Route path='/Groceries' element={<Groceries/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
