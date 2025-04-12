import React from 'react'
import './HeroSection.css'
import NavBar from '../Nav/NavBar'
export default function HeroSection() {
  return (
    <div className = "Hero">
        <div className="main">Shopping for your <br/>Dream house.</div>
        <span className="discount">Get 20% OFF</span>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className = "footer">
            <p>Moder design, peak functionality <br/>tailored to your individual needs</p>
            <div className = "buttons">
                <button className = "shop">Shop Now</button>
                <button className = "more">Explore More</button>
            </div>
        </div>
    </div>
  )
}