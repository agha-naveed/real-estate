import React from 'react'

export default function HeaderDiv({value}) {
  return (
    <div className='h-[80px] w-full bg-dark-primary-clr px-6 content-center'>
        <span className='text-white font-semibold text-[26px]'>{value}</span>
    </div>
  )
}