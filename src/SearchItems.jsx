import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchItems({userData}) {
  return (
    <>
      {
        userData.length != 0 ?
        <div className='w-[98%] h-full overflow-x-auto'>
          <div className='w-max overflow-x-auto py-2 px-5'>
            <table className='property-table'>
              <caption className='text-start my-2 text-xl font-bold'>Properties Detail</caption>
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
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map((u_data, i) => {
                    return (
                      
                      <tr className='hover:!bg-purple-100' key={`property_index_${i}`}>
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
                        <td><Link to={`/properties/${u_data.property_id}`}> <span className='bg-green-700 text-white text-[15px] px-4 py-2 rounded-lg hover:bg-green-800 transition-all'>View</span> </Link></td>
                      </tr>
                      )

                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        : null
      }
    </>
  )
}
