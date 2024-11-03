import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function Buyer() {
  return (
    <div className='w-full h-full overflow-hidden'>
        <HeaderDiv value="Buyer" />
        <Outlet />
    </div>
  )
}
