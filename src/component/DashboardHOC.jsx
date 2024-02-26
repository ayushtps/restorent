import React, { useContext, useState } from 'react'
import '../asset/style/components/DashboardHOC.css';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import Notify from '../Notify';
import { LoaderContext } from '../Context';
import { routes } from '../constant';
import { useSelector } from 'react-redux';

export const DashboardHOC = (Component) => {
  
  const NewComponent = () => {
    const state = useSelector(state => state.user.data)
  
    const [filterData, setfilterData] = useState(state)
    const [filterValue, setfilterValue] = useState('')


    const { setloader } = useContext(LoaderContext)

    const nvigate = useNavigate()
    const logInOut = () => {
      setloader(true)
      Notify("warning", `You r LoginOut`)
      sessionStorage.clear()
      nvigate('/login')
      setloader(false)
    }

    const handalChange = (e) => {
      let inputvalue = e.target.value
      setfilterValue(inputvalue)
      let filterProperty = state?.map((x,i)=>console.log(x.firstName))
      const filteredItem = filterProperty.filter((x) => {
        return x.toLowerCase().includes(inputvalue.toLowerCase())
    });
    console.log(filteredItem);
    setfilterData(filteredItem)
    }
    return <>
      <Container>
        <div>
          <div className="main-dash">
            <div className="sidebar-section">
              <div className="logo">
                <img src={require('../asset/images/logo.jpg')} alt="logo" />
              </div>
              <hr />
              <div className="menus">
                <NavLink to={routes.dashboard}><div><IoHomeOutline /></div></NavLink>
                <NavLink to={routes.tablebook}><div><MdOutlineTableRestaurant /></div></NavLink>
                <NavLink to={routes.menus}><div><MdRestaurantMenu /></div></NavLink>
                <NavLink to={routes.contact}><div><MdOutlineConnectWithoutContact /></div></NavLink>
                <NavLink to={routes.user}><div><FaRegUser /></div></NavLink>
                <div onClick={logInOut}>
                  <RiLogoutCircleRLine />
                </div>
              </div>
            </div>
            <div className="header">
              <div className="header-inner">
                <div className="header-search">
                  <input type="text" placeholder='Search.....' onChange={handalChange} value={filterValue}/>
                  <button><IoSearchOutline /></button>
                </div>
                <div className="header-btn">
                  <button>this is btn</button>
                </div>
              </div>
              <div className="content">
                <Component />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  }
  return NewComponent
}
