import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function Buyer() {
  return (
    <div className='w-full h-full'>
        <HeaderDiv value="Buyer" />
        <Outlet />
    </div>
  )
}
