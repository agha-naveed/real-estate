import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className='fixed bottom-2 text-black font-semibold right-3 text-[14px] text-end leading-4'>Developer: <br /> S.Naveed Abbas</div>
    </>
  )
}