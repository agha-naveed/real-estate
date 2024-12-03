import React from 'react'
import HeaderDiv from './HeaderDiv'
import { PiHouseLine } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className='w-full h-full'>
      <HeaderDiv value='Dashboard' />
      
      <div className="card flex bg-red-500 items-center justify-between w-[220px] h-[90px] py-2 px-6">
        <div className="grid text-white">
          <span>Total Properties</span>
          <span className='text-center text-2xl'>1</span>
        </div>
        <PiHouseLine className='text-[40px] text-white' />
      </div>
    </div>
  )
}