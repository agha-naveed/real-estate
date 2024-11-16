import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function receiptVoucher() {
  return (
    <div className="w-full">
      <HeaderDiv value='Receipt Voucher' />
      <Outlet />
    </div>
  )
}