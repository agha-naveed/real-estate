import React, { useInsertionEffect, useState } from 'react'
import HeaderDiv from './HeaderDiv'
import { PiHouseLine } from "react-icons/pi";
import axios from 'axios';

export default function Dashboard() {

  const [buyer, setBuyer] = useState('')

  useInsertionEffect(() => {
    let buyerDetails = async () => {
      let resp = await axios.get("")
    }
  }, [])

  return (
    <div className='w-full h-full'>
      <HeaderDiv value='Dashboard' />
      
      <div className="flex gap-6 p-5">
        <div className="card flex bg-red-600 items-center justify-between w-[220px] h-[90px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Properties</span>
            <span className='text-center text-2xl'>1</span>
          </div>
          <PiHouseLine className='text-[40px] text-white' />
        </div>

        <div className="card flex bg-blue-700 items-center justify-between w-[220px] h-[90px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Buyers</span>
            <span className='text-center text-2xl'>1</span>
          </div>
          <PiHouseLine className='text-[40px] text-white' />
        </div>

        <div className="card flex bg-orange-600 items-center justify-between w-[220px] h-[90px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Sellers</span>
            <span className='text-center text-2xl'>1</span>
          </div>
          <PiHouseLine className='text-[40px] text-white' />
        </div>
      </div>

    </div>
  )
}