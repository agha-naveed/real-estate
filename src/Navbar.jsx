import React from 'react'
import './App.css'
import logo from './assets/img/logo.png'
import { MdOutlineSpaceDashboard, MdPermIdentity  } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { TbReportAnalytics, TbFileInvoice } from "react-icons/tb";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar w-[80px] md:min-w-[300px] min-h-screen py-5 bg-primary-clr'>

            <div className='justify-self-center'>
                <Link to='/' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'><img src={logo} alt="Logo" className='md:w-[100px] w-[50px]' /></Link>
            </div>

            <ul className='py-5 grid gap-1'>
                <li>
                    <Link to='/' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <MdOutlineSpaceDashboard className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>Dashboard</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='properties' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <PiHouse className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>All Properties</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='buyer-info' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <MdPermIdentity  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>Buyer</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='seller-info' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <MdPermIdentity  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>Seller</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='invoice' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <TbFileInvoice className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>Invoice</span>
                    </Link>
                </li>
                
                <li>
                    <Link to='' className='md:py-[14px] md:px-[40px] p-2 md:justify-start justify-center'>
                        <TbReportAnalytics  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px] md:block hidden'>Report</span>
                    </Link>
                </li>

            </ul>

            
                
        </nav>
    )
}