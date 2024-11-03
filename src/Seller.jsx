import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function Seller() {
  return (
    <div className='w-full h-full'>
        <HeaderDiv value="Seller" />
        <Outlet />
    </div>
  )
}
