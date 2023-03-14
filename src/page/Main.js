import React from 'react'
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";
import Navbar from '../component/Navbar';

export default function () {
  return (
    <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}
