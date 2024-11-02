import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import HeaderDiv from './HeaderDiv'

export default function Properties() {
  return (
    <div className='w-full h-full overflow-hidden'>
        <HeaderDiv value='Properties' />
        <Outlet />
    </div>
  )
}
