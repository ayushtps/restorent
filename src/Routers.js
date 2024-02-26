import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TableBooking from './pages/TableBooking'
import Menus from './pages/Menus'
import Contact from './pages/Contact'
import AllUser from './pages/AllUser'
import { useDispatch } from 'react-redux'
import { LoaderContext } from './Context'
import { Circles } from 'react-loader-spinner'
import { getApiData } from './redux/slice/UserSlice'
import { routes } from './constant'

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
    dispatch(getApiData())
  }, [])

  return (
    <>
      <div style={{ opacity: loader && 0.5 }}>
        <Routes>
          <Route path={routes.root} element={<Navigate to={routes.login} />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.dashboard} element={<HomePage />} />
          <Route path={routes.tablebook} element={<TableBooking />} />
          <Route path={routes.menus} element={<Menus />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.user} element={<AllUser />} />
          <Route path="*" element={<Navigate replace to={routes.root}/>} />
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