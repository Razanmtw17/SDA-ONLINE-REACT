import React from 'react'
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
function LayOut() {
  return (
    <div>
    <NavBar />
    {/* children  */}
    <Outlet />
    <Footer />
  </div>
  )
}
export default LayOut;