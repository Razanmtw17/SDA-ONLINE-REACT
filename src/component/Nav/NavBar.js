import React from 'react';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import'./NavBar.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function NavBar() {
  return (
    <div className = "nav">
        <img src = {logo} alt = "logo"/>

        <ul className = "navList">
            <Link to="/">  <Stack direction="row" spacing={3}>
                              <HomeIcon  sx={{ color: "white" }}/>
                            </Stack>
            </Link>
            <Link to="/products"><EventSeatIcon sx={{ color: "white" }}/></Link>
            <Link to="/wishlist"><FavoriteIcon sx={{ color: "white" }}/></Link>
        </ul>
        <div className="lang">
            <p>EN | AR </p>
            <img src = {cart} alt = "cart"/>
        </div>
    </div>
  )
}