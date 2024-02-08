import React from 'react'
import '../asset/style/components/DashboardHOC.css';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const DashboardHOC = (Component) => {
  const NewComponent = () => {
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
                <NavLink to='/dashboard'><div><IoHomeOutline /></div></NavLink>
                <NavLink to='/tablebooking'><div><MdOutlineTableRestaurant /></div></NavLink>
                <NavLink to='/menus'><div><MdRestaurantMenu /></div></NavLink>
                <NavLink to='/contact'><div><MdOutlineConnectWithoutContact /></div></NavLink>
                <div>
                  <RiLogoutCircleRLine />
                </div>
              </div>
            </div>
            <div className="header">
              <div className="header-inner">
                <div className="header-search">
                  <input type="text" placeholder='Search.....' />
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