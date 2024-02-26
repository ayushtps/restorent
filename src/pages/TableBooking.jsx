import React from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import '../asset/style/pages/TableBooking.css';

function TableBooking() {
  return (
    <div className="booktable">
      <div className="frm-container">
        <div className="table-form">
          <div className="welcome-header">
            <span>Reservation</span>
            <h2>Book Now</h2>
          </div>
          <form action="">
            <div className="input-group">
              <input type="text" placeholder='Name' />
            </div>
            <div className="input-group">
              <input type="email" placeholder='Email' />
            </div>
            <div className="input-group" style={{ display: 'flex' }}>
              <input type="date" placeholder='date' style={{ marginRight: '7px' }} />
              <input type="time" placeholder='time' />
            </div>
            <div className="input-group">
              <input type="number" placeholder='Person' />
            </div>
            <div className="input-group">
              <textarea name="" id="" placeholder='Your Message...'></textarea>
            </div>
            <div className="input-group">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default DashboardHOC(TableBooking)