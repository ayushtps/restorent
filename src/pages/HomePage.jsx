import React from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import { CiPlay1 } from "react-icons/ci";
import { LiaLeafSolid } from "react-icons/lia";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import '../asset/style/pages/HomePage.css'

function HomePage() {
  return (
    <>
      <section>
        <div className="main-contain">
          <div className="left-contain">
            <div className="contain-food">
              <h1>We Love <br />
                Delicious Foods!</h1>
            </div>
            <div className="food-btn">
              <button>Explore menu</button>
              <h5><CiPlay1 /> play video</h5>
            </div>
            <div className="quality">
              <div className="quality-icon">
                <LiaShippingFastSolid />
                <h5>fast delivery</h5>
              </div>
              <div className="quality-icon">
                <LiaLeafSolid />
                <h5>fresh fruit</h5>
              </div>
              <div className="quality-icon">
                <HiOutlineChatBubbleOvalLeft />
                <h5>24/7 support</h5>
              </div>
            </div>
          </div>
          <div className="right-contain">
            <div className="food-image">
              <img src={require('../asset/images/hero-1.jpg')} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="welcome-main">
          <div className="welcome-image">
            <img src={require('../asset/images/hero-2.jpg')} alt="" />
          </div>
          <div className="welcome-contain">
            <div className="welcome-header">
              <span>about</span>
              <h2>Welcome to Resto</h2>
            </div>
            <div className="welcome-pera">
              <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className="speacial">
              <h3>Special Recipe</h3>
              <div className="speacial-recipi">
                <div className="div1">
                  <img src={require('../asset/images/hero-3.jpg')} alt="" />
                  <h6>Australian Organic <br /> Beef</h6>
                </div>
                <div className="div1">
                  <img src={require('../asset/images/hero-3.jpg')} alt="" />
                  <h6>Australian Organic <br /> Beef</h6>
                </div>
                <div className="div1">
                  <img src={require('../asset/images/hero-3.jpg')} alt="" />
                  <h6>Australian Organic <br /> Beef</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="team-main">
          <div className="welcome-header" style={{ textAlign: 'center' }}>
            <span>Specialties</span>
            <h2>Our Team</h2>
          </div>
          <div className="doctor-div">
            <div className="img-sec">
              <img src={require('../asset/images/chef-1.jpg')} alt="" />
              <div className="img-content">
                <h4>Aaron Patel</h4>
                <p>CEO</p>
                <div className="icon">
                  <CiFacebook />
                  <CiTwitter />
                  <FaInstagram />
                  <AiOutlineGooglePlus />
                </div>
              </div>
            </div>
            <div className="img-sec">
              <img src={require('../asset/images/chef-2.jpg')} alt="" />
              <div className="img-content">
                <h4>Daniel Tebas</h4>
                <p>Chef</p>
                <div className="icon">
                  <CiFacebook />
                  <CiTwitter />
                  <FaInstagram />
                  <AiOutlineGooglePlus />
                </div>
              </div>
            </div>
            <div className="img-sec">
              <img src={require('../asset/images/chef-3.jpg')} alt="" />
              <div className="img-content">
                <h4>Jon Snow</h4>
                <p>Chef</p>
                <div className="icon">
                  <CiFacebook />
                  <CiTwitter />
                  <FaInstagram />
                  <AiOutlineGooglePlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardHOC(HomePage)