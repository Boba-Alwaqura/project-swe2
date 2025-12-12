import React from 'react'
import Footer from '../Footer/Footer' 
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/navbar'

export default function Layout() {
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>
}
