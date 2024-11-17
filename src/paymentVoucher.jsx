import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function paymentVoucher() {
  return (
    <div className="w-full">
      <HeaderDiv value='Payment Voucher' />
      <Outlet />
    </div>
  )
}
