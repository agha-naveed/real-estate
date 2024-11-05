import React, { useState, useInsertionEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

export default function PropertyFullDetail() {


    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  
    let loader = useLoaderData()


    return (
    <div className='w-full h-full overflow-x-auto px-3 pt-8 pb-2'>
        <table className='property-table w-max'>
            <thead>
                <tr>
                    <th>Propety ID</th>
                    <th>Seller ID</th>
                    <th>Seller Name</th>
                    <th>Property Type</th>
                    <th>Size (sq.ft)</th>
                    <th>City</th>
                    <th>Province/State</th>
                    <th>Zip Code</th>
                    <th>Price (in Pkr)</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Entry Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{loader.property_id}</td>
                    <td>{loader.seller_id}</td>
                    <td>{loader.seller_name}</td>
                    <td>{loader.property_type}</td>
                    <td>{loader.property_size}</td>
                    <td>{loader.property_city}</td>
                    <td>{loader.property_state}</td>
                    <td>{loader.property_zip}</td>
                    <td>{loader.property_price}</td>
                    <td>{loader.property_location}</td>
                    <td>{loader.property_status}</td>
                    <td>{loader.entry_date}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    )
}
