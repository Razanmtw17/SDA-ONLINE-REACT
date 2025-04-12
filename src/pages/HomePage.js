import React from 'react'
import HeroSection from "../component/Hero/HeroSection";
import Product from "../component/Products/ProductHomePage";
import '../component/Products/ProductsStyle.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Link } from "react-router-dom";
export default function HomePage({productList, wishList,setWishList }) {

  return (
    <div className="HomeSection">
        <HeroSection/>
        <h3 className="title">Home Office<br/>Essentials</h3>
        <Product productList = {productList} wishList={wishList} setWishList={setWishList}/>
        
        <div className="next">
          <p>See More</p>
          <Link to = "/products">
          <button><KeyboardArrowRightIcon/></button>
          </Link>
        </div>
    </div>
  )
}