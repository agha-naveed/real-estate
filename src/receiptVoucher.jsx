import React, { useState, useInsertionEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

export default function receiptVoucher() {
  return (
    <div className='w-full h-full'>
      <div className="add-btn w-full p-5 flex justify-end">
        <Link to='create-new-invoice' className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
            <FiPlus className='text-[30px]' />
            <span className='text-[20px]'>New Receipt Voucher</span>
        </Link>
      </div>

      <div className='w-[98%] h-full overflow-x-auto py-2 px-5'>
        <table className='property-table'>
          <thead className='font-semibold'>
            <tr>
              <th>Receipt Voucher ID</th>
              <th>Invoice ID</th>
              <th>Amount</th>
              <th>Remaining Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              userData.map((u_data, i) => {
                return (
                  <tr className='hover:!bg-purple-100' key={`seller_index_${i}`}>
                    <td>{u_data.invoice_id}</td>
                    <td>{u_data.property_id}</td>
                    <td>{u_data.buyer_id}</td>
                    <td>{u_data.seller_id}</td>
                    <td>{u_data.invoice_date}</td>
                    <td>{u_data.invoice_recievable_amount}</td>
                    <td>{u_data.invoice_payable_amount}</td>
                    <td>{u_data.commission_amount}</td>
                  </tr>
                  )

              })
            } */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
