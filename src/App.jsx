import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {
  return (
    <div className='flex'>
      <Navbar />
      <Outlet />
    </div>
  )
}