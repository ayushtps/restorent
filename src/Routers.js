import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TableBooking from './pages/TableBooking'
import Menus from './pages/Menus'
import Contact from './pages/Contact'

function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<HomePage/>}/>
        <Route path='/tablebooking' element={<TableBooking/>}/>
        <Route path='/menus' element={<Menus/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default Routers