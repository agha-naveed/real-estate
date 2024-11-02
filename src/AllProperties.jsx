import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

export default function AllProperties() {
  return (
    <section className='overflow-hidden'>
        <div className="add-property-btn w-full p-5 flex justify-end">
            <Link to='add-new-property' className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
                <FiPlus className='text-[30px]' />
                <span className='text-[20px]'>Create New</span>
            </Link>
        </div>


        <div className='w-full h-full overflow-x-scroll'>
          <table className='property-table overflow-x-scroll'>
            <thead className='font-semibold'>
              <tr>
                <th>Property ID</th>
                <th>Seller ID</th>
                <th>Type</th>
                <th>Size</th>
                <th>City</th>
                <th>Province/State</th>
                <th>Zip Code</th>
                <th>Price (in pkr)</th>
                <th>Location</th>
                <th>Status</th>
                <th>Entry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Commercial</td>
                <td>123</td>
                <td>Lahore</td>
                <td>punjab</td>
                <td>51000</td>
                <td>5200002</td>
                <td>shop 15 ibrahim market near clifton pull hargisa skardu</td>
                <td>available</td>
                <td>2024-2-11</td>
              </tr>
            </tbody>
          </table>
        </div>

    </section>
  )
}
