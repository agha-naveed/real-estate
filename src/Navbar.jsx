import React from 'react'
import logo from './assets/img/logo.png'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Navbar() {
    return (
        <nav className='navbar w-[300px] h-screen py-5 bg-primary-clr'>
            <div className='justify-self-center'>
                <Link to={ Dashboard }><img src={logo} alt="Logo" className='w-[100px]' /></Link>
            </div>
            <ul>
                <li>
                    <Link to={ Dashboard } className='flex'>
                        <MdOutlineSpaceDashboard className='text-white' />
                        <span>Dashboard</span>
                    </Link>
                </li>
            </ul>
                
        </nav>
    )
}