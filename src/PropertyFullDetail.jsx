import React, { useState, useInsertionEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import house from './assets/img/house.png'

export default function PropertyFullDetail() {


    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  
    let loader = useLoaderData()


    return (
    <div className='w-full h-full'>
        <section>
            <div className="container mx-auto py-10">
                <h1 className='text-center text-3xl font-bold'>Property Details</h1>
                
                <div className='mt-10 w-full grid justify-center'>
                    <div className='flex'>
                        <img src={house} className='w-[300px] rounded-lg' alt="House Image" />

                        <div className='grid'>
                            
                            <div className='pr_full_detail_txt grid h-full'>
                                <p className='grid'>Property ID: <span className=''>{loader.property_id}</span></p>
                                
                                <p className='grid'>Seller ID: <span className=''>{loader.seller_id}</span></p>
                                <p className='grid'>Seller Name: <span className=''>{loader.seller_name}</span></p>
                                <p className='grid'>Property Type: <span className=''>{loader.property_type}</span></p>

                                <p className='grid'>Size: <span className=''>{loader.property_size}</span></p>
                                <p className='grid'>Price: <span className=''>{loader.property_price}</span></p>
                            
                                <p className='grid'>City: <span className=''>{loader.property_city}</span></p>
                                <p className='grid'>Province/State: <span className=''>{loader.property_state}</span></p>

                                <p className='grid'>Zip: <span className=''>{loader.property_zip}</span></p>

                                <p className='grid'>Status: <span className=''>{loader.property_status}</span></p>
                            </div>

                            <p className='grid font-medium my-[10px] mx-[50px] text-grayish-clr'>Location: <span className='text-[19px] text-black'>{loader.property_location}</span></p>
                        
                        </div>
                    </div>

                    <section className='property-additional-info'>
                        <h1 className='text-center text-3xl py-[80px] font-semibold'>Additional Info</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Number of Floors</th>
                                    <td>YES</td>
                                </tr>
                                <tr>
                                    <th>Land</th>
                                    <td>YES</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>


                </div>


            </div>
        </section>
        
    </div>
    )
}
