import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDiv from './HeaderDiv'

export default function Search() {
  return (
    <div className='search-section w-full'>
        <HeaderDiv value={"Search"} />
        <div className="container">
            
            <div className="search-items">
                <Outlet />
            </div>
        </div>
    </div>
  )
}
