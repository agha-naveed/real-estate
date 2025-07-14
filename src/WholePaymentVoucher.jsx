import React, { useState, useInsertionEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

export default function WholePaymentVoucher() {
  
  const [userData, setUserData] = useState([]);

  useInsertionEffect(() => {

    const rvDetail = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/payment-voucher-details");
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    rvDetail();
  }, []);

  return (
    <div className='w-full h-auto'>
      <div className="add-btn w-full p-5 flex justify-end">
        <Link to='new-payment-voucher' className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
            <FiPlus className='text-[30px]' />
            <span className='text-[20px]'>New Payment Voucher</span>
        </Link>
      </div>

      <div className='w-[98%] h-full overflow-x-auto py-2 px-5'>
        <table className='property-table'>
          <thead className='font-semibold'>
            <tr>
              <th>PV ID</th>
              <th>Invoice ID</th>
              <th>Buyer Name</th>
              <th>Seller Name</th>
              <th>Paid Amount</th>
              <th>Remaining Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((u_data, i) => {
                return (
                  <tr className='hover:!bg-purple-100' key={`seller_index_${i}`}>
                    <td>{u_data.pv_id}</td>
                    <td>{u_data.inv_id}</td>
                    <td>{u_data.buyer_name}</td>
                    <td>{u_data.seller_name}</td>
                    <td>{u_data.paid_amount}</td>
                    <td>{u_data.remaining_amount}</td>
                    <td>{u_data.entry_date}</td>
                  </tr>
                  )

              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
