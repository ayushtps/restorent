import React from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import '../asset/style/pages/Contact.css';

function Contact() {
  // https://demos.freehtml5.co/resto/menu.html
  // https://bootstrapmade.com/demo/templates/Delicious/index.html#contact
  return (
    <>
      <div className="contact-main">
        <div className="contact-head">
          <h3>Contact Us</h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14873.751672475599!2d72.90226569768068!3d21.254126379687865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707418060125!5m2!1sen!2sin" width="100%" height="350" style={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-form">
          <div className="form-header">
            <div className="small-div">
              <div className="icons">
                <CiLocationOn />
              </div>
              <div className="box-content">
                <h4>Location</h4>
                <p>A108 Adam Street <br />
                  New York, NY 535022</p>
              </div>
            </div>
            <div className="small-div">
              <div className="icons">
                <IoTimeOutline />
              </div>
              <div className="box-content">
                <h4>Open Hours:</h4>
                <p>Monday-Saturday: <br />
                  11:00 AM - 2300 PM</p>
              </div>
            </div>
            <div className="small-div">
              <div className="icons">
                <AiOutlineMail />
              </div>
              <div className="box-content">
                <h4>Email:</h4>
                <p>info@example.com <br />
                  contact@example.com</p>
              </div>
            </div>
            <div className="small-div">
              <div className="icons">
                <IoCallOutline />
              </div>
              <div className="box-content">
                <h4>Call:</h4>
                <p>+1 5589 55488 51 <br />
                  +1 5589 22475 14</p>
              </div>
            </div>
          </div>
          <div className="form-body">
            <form action="">
              <div className="input-group" style={{ display: 'flex' }}>
                <input type="text" placeholder='Your Name' style={{ marginRight: '10px' }} />
                <input type="text" placeholder='Your Email' />
              </div>
              <div className="input-group">
                <input type="text" placeholder='Subject' />
              </div>
              <div className="input-group">
                <textarea name="" id="" cols="0" rows="0" placeholder='Message'></textarea>
              </div>
              <div className="input-group">
                <button>Send Messasge</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHOC(Contact)