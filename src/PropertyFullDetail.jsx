import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import house from './assets/img/house.png'
import { FaDownload } from "react-icons/fa6";
import { useReactToPrint } from 'react-to-print';
import aghaLogo from './assets/img/agha_naveed_logo.png'

export default function PropertyFullDetail() {


    let loader = useLoaderData()



    return (
    <div className='w-full h-full pt-10 px-5'>

        
        <div className='flex justify-end'>        
            <button onClick={()=> handleDownloadPdf()} className='flex gap-2 transition-all hover:bg-dark-primary-clr bg-primary-clr text-xl px-6 py-2 rounded-[30px] text-white'> <FaDownload /> Export</button>
        </div>

        <section ref={componentRef} className='flex justify-center'>
            <div className="container mx-auto pt-10">
                <img src={aghaLogo} className='w-[60px]' alt="" />
                <h1 className='text-center text-3xl font-bold'>Property Details</h1>
                
                <div className='mt-10 w-full h-full min-h-screen grid justify-center'>
                    <div className='lg:flex grid justify-items-center lg:gap-0 gap-10 h-fit'>
                        <img src={house} className='w-[300px] h-fit rounded-lg' alt="House Image" />

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

                </div>
                
                
            </div>
        </section>

        
    </div>
    )
}
