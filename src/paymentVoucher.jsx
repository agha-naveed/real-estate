import React from 'react'
import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function PaymentVoucher() {
  return (
    <div className="w-full overflow-hidden">
      <HeaderDiv value='Payment Voucher' />
      <Outlet />
    </div>
  )
}
