import React, { useState, useInsertionEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

export default function SellerInfo() {



  
  const [userData, setUserData] = useState([]);

  
  useInsertionEffect(() => {
    const propertyData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/seller-details");
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    propertyData();
  }, []);






  return (
    <div className='w-full h-full'>
      <div className="add-btn w-full p-5 flex justify-end">
        <Link to='add-new-seller' className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
            <FiPlus className='text-[30px]' />
            <span className='text-[20px]'>Add New Seller</span>
        </Link>
      </div>

      <div className='w-[98%] h-full overflow-x-auto py-2 px-5'>
          <table className='property-table'>
            <thead className='font-semibold'>
              <tr>
                <th>Seller ID</th>
                <th>Name</th>
                <th>Cell#</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                userData.map((u_data, i) => {
                  return (
                    <tr key={`buyer_index_${i}`}>
                      <td>{u_data.seller_id}</td>
                      <td>{u_data.seller_name}</td>
                      <td>{u_data.seller_cell}</td>
                      <td>{u_data.seller_address}</td>
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
