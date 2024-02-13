import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TableBooking from './pages/TableBooking'
import Menus from './pages/Menus'
import Contact from './pages/Contact'
import AllUser from './pages/AllUser'

function Routers() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<HomePage/>}/>
        <Route path='/tablebooking' element={<TableBooking/>}/>
        <Route path='/menus' element={<Menus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={<AllUser/>}/>
      </Routes>
    </>
  )
}

export default Routers