import React from 'react'

export default function SearchItems({userData}) {
  return (
    <div className='w-[98%] h-full overflow-x-auto py-2 px-5'>
        <table className='property-table'>
          <thead className='font-semibold'>
            <tr>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((u_data, i) => {
                return (
                  <tr className='hover:!bg-purple-100' key={`seller_index_${i}`}>
                    <td>{u_data.property_city}</td>
                  </tr>
                  )

              })
            }
          </tbody>
        </table>
      </div>
  )
}
