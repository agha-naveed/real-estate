import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

export default function AllProperties() {
  return (
    <section className='container mx-auto'>
        <div className="add-property-btn w-full p-5 flex justify-end">
            <Link to='add-new-property' className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
                <FiPlus className='text-[30px]' />
                <span className='text-[20px]'>Create New</span>
            </Link>
        </div>

        <section>
            
        </section>
    </section>
  )
}
