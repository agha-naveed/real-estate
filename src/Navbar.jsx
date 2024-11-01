import React from 'react'
import './App.css'
import logo from './assets/img/logo.png'
import { MdOutlineSpaceDashboard, MdPermIdentity  } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Navbar() {
    return (
        <nav className='navbar w-[300px] h-screen py-5 bg-primary-clr'>
            <div className='justify-self-center'>
                <Link to={ Dashboard }><img src={logo} alt="Logo" className='w-[100px]' /></Link>
            </div>

            <ul className='py-5'>
                <li className=''>
                    <Link to={ Dashboard }>
                        <MdOutlineSpaceDashboard className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px]'>Dashboard</span>
                    </Link>
                </li>
                
                <li>
                    <Link to={ Dashboard }>
                        <PiHouse className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px]'>All Properties</span>
                    </Link>
                </li>
                
                <li>
                    <Link to={ Dashboard }>
                        <MdPermIdentity  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px]'>Buyer</span>
                    </Link>
                </li>
                
                <li>
                    <Link to={ Dashboard }>
                        <MdPermIdentity  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px]'>Seller</span>
                    </Link>
                </li>
                
                <li>
                    <Link to={ Dashboard }>
                        <TbReportAnalytics  className='text-white font-thin text-[25px]' />
                        <span className='text-white text-[21px]'>Report</span>
                    </Link>
                </li>

            </ul>
                
        </nav>
    )
}