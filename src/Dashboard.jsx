import React, { useInsertionEffect, useState } from 'react'
import HeaderDiv from './HeaderDiv'
import { PiHouseLine } from "react-icons/pi";
import { IoMdPeople } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import axios from 'axios';

export default function Dashboard() {

  const [buyer, setBuyer] = useState('')
  const [seller, setSeller] = useState('')
  const [property, setProperty] = useState('')
  const [invoice, setInvoice] = useState('')

  useInsertionEffect(() => {
    let datas = async () => {
      let pResp = await axios.get("http://localhost:7000/api/whole-properties")
      let sResp = await axios.get("http://localhost:7000/api/sellers")
      let bResp = await axios.get("http://localhost:7000/api/buyers")
      let iResp = await axios.get("http://localhost:7000/api/invoices")
      setBuyer(bResp.data)
      setSeller(sResp.data)
      setProperty(pResp.data)
      setInvoice(iResp.data)
    }
    datas()
  }, [])

  return (
    <div className='w-full h-full'>
      <HeaderDiv value='Dashboard' />
      
      <div className="flex gap-6 p-5 flex-wrap">
        <div className="card flex bg-red-600 items-center justify-between w-[220px] h-[95px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Properties</span>
            <span className='text-center text-[27px]'>{property.length}</span>
          </div>
          <PiHouseLine className='text-[40px] text-white' />
        </div>

        <div className="card flex bg-blue-700 items-center justify-between w-[220px] h-[95px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Buyers</span>
            <span className='text-center text-[27px]'>{buyer.length}</span>
          </div>
          <IoMdPeople className='text-[40px] text-white' />
        </div>

        <div className="card flex bg-orange-600 items-center justify-between w-[220px] h-[95px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Sellers</span>
            <span className='text-center text-[27px]'>{seller.length}</span>
          </div>
          <IoMdPeople className='text-[40px] text-white' />
        </div>

        <div className="card flex bg-green-700 items-center justify-between w-[220px] h-[95px] py-2 px-6">
          <div className="grid text-white">
            <span>Total Invoice</span>
            <span className='text-center text-[27px]'>{invoice.length}</span>
          </div>
          <TbFileInvoice className='text-[40px] text-white' />
        </div>
      </div>

    </div>
  )
}