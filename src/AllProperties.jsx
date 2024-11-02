import React, { useState, useInsertionEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

export default function AllProperties() {

  const [userData, setUserData] = useState([]);

  
useInsertionEffect(() => {
  const propertyData = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/property-details");
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  propertyData();
  console.log(userData);
}, []);


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
                <th>Seller Name</th>
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
              {
                userData.map((u_data, i) => {
                  return (
                    <tr key={`property_index_${i}`}>
                      <td>{u_data.property_id}</td>
                      <td>{u_data.seller_id}</td>
                      <td>{u_data.seller_name}</td>
                      <td>{u_data.property_type}</td>
                      <td>{u_data.property_size}</td>
                      <td>{u_data.property_city}</td>
                      <td>{u_data.property_state}</td>
                      <td>{u_data.property_zip}</td>
                      <td>{u_data.property_price}</td>
                      <td>{u_data.property_location}</td>
                      <td>{u_data.property_status}</td>
                      <td>{u_data.entry_date}</td>
                    </tr>
                    )

                })
              }
            </tbody>
          </table>
        </div>

    </section>
  )
}
