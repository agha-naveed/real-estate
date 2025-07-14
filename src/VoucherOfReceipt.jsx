import HeaderDiv from './HeaderDiv'
import { Outlet } from 'react-router-dom'

export default function VoucherOfReceipt() {
  return (
    <div className="w-full overflow-hidden">
      <HeaderDiv value='Receipt Voucher' />
      <Outlet />
    </div>
  )
}