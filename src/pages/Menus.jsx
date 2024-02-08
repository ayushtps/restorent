import React from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import '../asset/style/pages/Menus.css'

function Menus() {
  return (
    <>
      <section>
        <div className="menu-main">
          <div className="welcome-header" style={{ textAlign: 'center' }}>
            <span>Specialties</span>
            <h2>Our Menu</h2>
          </div>
          <div className="menus-sec">
            <div className="menu-card">
              <div className="menu">
                <div className="menu-heading">
                  <h3>Breakfast</h3>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
              </div>
              <div className="menu">
                <div className="menu-heading">
                  <h3>Breakfast</h3>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
              </div>
              <div className="menu">
                <div className="menu-heading">
                  <h3>Breakfast</h3>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
                <div className="one-menu">
                  <div className="one-menu-image">
                    <img src={require('../asset/images/breakfast-1.jpg')} alt="" />
                  </div>
                  <div className="one-menu-content">
                    <h2>Egg Sandwich</h2>
                    <p>Meat Ball, Mie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="special-dish-main">
          <div className="welcome-header" style={{ textAlign: 'center' }}>
            <span>Specialties</span>
            <h2>Special Dishes</h2>
          </div>
          <div className="section-1">
            <div className="left-sec">
              <div className="special-number">
                <h2>01.</h2>
              </div>
              <div className="dish-text">
                <h3>
                  <span>Beef</span> <br />
                  Steak Sauce
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ea vero alias perferendis quas animi doloribus voluptates. Atque explicabo ea nesciunt provident libero qui eum, corporis esse quos excepturi soluta?</p>
                <h3>$15.00</h3>
                <div className="food-btn">
                  <button>Book A Table</button>
                </div>
              </div>
            </div>
            <div className="right-sec">
              <img src={require('../asset/images/steak.jpg')} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="special-dish-main">
          <div className="section-1">
            <div className="right-sec">
              <img src={require('../asset/images/salmon-zucchini.jpg')} alt="" />
            </div>
            <div className="left-sec">
              <div className="special-number">
                <h2>02.</h2>
              </div>
              <div className="dish-text">
                <h3>
                  <span>Salmon</span> <br />
                  Zucchini
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ea vero alias perferendis quas animi doloribus voluptates. Atque explicabo ea nesciunt provident libero qui eum, corporis esse quos excepturi soluta?</p>
                <h3>$12.00</h3>
                <div className="food-btn">
                  <button>Book A Table</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardHOC(Menus)