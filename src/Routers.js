import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TableBooking from './pages/TableBooking'
import Menus from './pages/Menus'
import Contact from './pages/Contact'
import AllUser from './pages/AllUser'
import { GetData } from './redux/action/action'
import { useDispatch } from 'react-redux'
import { LoaderContext } from './Context'
import { Circles } from 'react-loader-spinner'

function Routers() {

  const { loader } = React.useContext(LoaderContext)

  const loaderStyles = {
    position: "absolute",
    zIndex: 9999,
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetData())
  }, [])

  return (
    <>
      <div style={{ opacity: loader && 0.5 }}>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<HomePage />} />
          <Route path='/tablebooking' element={<TableBooking />} />
          <Route path='/menus' element={<Menus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<AllUser />} />
        </Routes>
      </div>
      {
        loader && (
          <div style={loaderStyles}>
            <Circles color='#854828'/>
          </div>
        )
      }
    </>
  )
}

export default Routers