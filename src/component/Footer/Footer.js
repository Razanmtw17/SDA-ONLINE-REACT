import React from 'react';
import './Footer.css';
import image from '../../images/furnitures.png';
export default function Footer() {
  return (
    <div className="container1">
       <div className = "footer1">
        <div className="contact">
            <div className="info">
            <h3>Modern-Furnishure</h3>
            <p>Sun - Fri 8:00 - 11:00</p>
            <h4>+966 05 123 1234</h4>
            <h4>Contact Form</h4>
            <h4>WhatsAppa</h4>
            <h4>EN | AR </h4>
            </div>
            <div className = "storeLogo">
                <img src = {image} width = "80px"alt = "logo"/>
            </div>
            <div className = "slogan">
                <h3>Your House.</h3>
                <h3>Reinventer.</h3>
            </div>
        </div>
        <div className="links">
            <div className="quickAccess">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Newsletter</li>
                    <li>Blog</li>
                    <li>Shopping and return</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="keep">
                <h3>Lets Keep in Touch</h3>
                <p>sign up and get 12% discount on your first purchase</p>
                <div className="row">
                    <input type="text" id="input" placeholder="Enter your Email" />
                    <button className="add-btn" id="submit-btn">Sign&nbsp;up</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}