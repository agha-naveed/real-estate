import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom';
import house from './assets/img/house.png'
import commercial from './assets/img/commercial.png'
import land from './assets/img/land.png'
import mixUse from './assets/img/mix-use.png'
import { FaDownload } from "react-icons/fa6";
import { usePDF  } from 'react-to-pdf';
import aghaLogo from './assets/img/agha_naveed_logo.png'

export default function PropertyFullDetail() {

    
    let loader = useLoaderData()

    const { toPDF, targetRef } = usePDF({filename: 'property_invoice.pdf'});
    



    return (
    <div className='w-full h-full pt-10 px-5'>

        
        <div className='flex justify-end'>        
            <button onClick={toPDF} className='flex relative z-10 gap-2 transition-all hover:bg-dark-primary-clr bg-primary-clr text-xl px-6 py-2 rounded-[30px] text-white'> <FaDownload /> Export</button>
            
        </div>

        <section ref={targetRef} className='flex justify-center'>
            

            <div className="container mx-auto grid place-content-center py-20">
                <div className='justify-items-end'>
                    <img src={aghaLogo} className='w-[70px]' alt="Agha Naveed Logo" />
                </div>

                <h1 className='text-center text-3xl font-bold'>Property Details</h1>
                
                <div className='mt-10 w-full h-full grid justify-center'>
                    <div className='lg:flex grid justify-items-center lg:gap-0 gap-10 h-fit'>
                        {
                            (loader.property_type == "residential") ? <img src={house} className='w-[300px] h-fit rounded-lg' alt="House Image" /> : (loader.property_type == "commercial") ? <img src={commercial} className='w-[300px] h-fit rounded-lg' alt="House Image" /> : (loader.property_type == "land") ? <img src={land} className='w-[300px] h-fit rounded-lg' alt="House Image" /> : <img src={mixUse} className='w-[300px] h-fit rounded-lg' alt="House Image" />
                        }

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
