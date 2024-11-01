import React from 'react'
import { Link } from 'react-router-dom';
import HeaderDiv from './HeaderDiv'
import { FiPlus } from "react-icons/fi";

export default function Properties() {
  return (
    <div className='w-full h-full'>
        <HeaderDiv value='Properties' />
        <section>
            <div className="add-property-btn w-full p-5 flex justify-end">
                <Link className='flex bg-primary-clr w-fit py-[6px] px-[24px] text-white rounded-[22px] gap-[6px] items-center transition-all hover:bg-dark-primary-clr'>
                    <FiPlus className='text-[30px]' />
                    <span className='text-[20px]'>Create New</span>
                </Link>
            </div>
        </section>
    </div>
  )
}
