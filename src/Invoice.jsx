import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function Invoice() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <HeaderDiv value="Invoice" />
      <Outlet />
    </div>
  )
}
