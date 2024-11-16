import React, { useState } from 'react'
import { Form, Outlet, useNavigate } from 'react-router-dom'
import HeaderDiv from './HeaderDiv'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import SearchItems from './SearchItems'



export default function Search() {
  
    const [message, setMessage] = useState('')

    const {register, handleSubmit, } = useForm()
    
    const [userData, setUserData] = useState([]);
  
  
    const onSubmit = async (data) => {
        try {
            const response = await axios.get("http://localhost:7000/api/search-property", {
                params: {
                    property_type: data.property_type,
                    property_size: data.property_size,
                    property_city: data.property_city
                }
            });
            
            setUserData(response.data);
            console.log(response.data)
            setMessage('');
        } catch (error) {
            console.warn(error);
            setMessage("Error Occurred!");
        }
    };









  return (
    <div className='search-section w-full overflow-hidden'>
        <HeaderDiv value={"Search"} />
        <div className="container">
            
            <section className='search-values'>
                <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='search-form grid justify-center xl:w-[700px] lg:w-[70%] w-full py-10 px-8'>
                    
                    <div className='flex gap-1'>
                        <div className='search-p-size grid w-1/3'>
                            <label htmlFor="" className='text-[14px]'>Size (Sq.ft)</label>
                            <input type="number" placeholder='100' className='w-[20%]' {...register("property_size")} />
                        </div>

                        <div className='w-full'>
                            <label htmlFor="as" className='text-[14px]'>City</label>
                            <input type="text" id='as' className='w-[80%]' {...register("property_city")} />
                        </div>
                    </div>
                    
                    
                    <div className='flex gap-1'>
                        <div className='w-full'>
                            <label htmlFor="" className='text-[14px]'>Property Type</label>
                            <select name="" {...register("property_type")} id="">
                            <option value="-" defaultValue={true}>-- select --</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                                <option value="land">Land</option>
                                <option value="mixuse">Mix-Used</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="" className='text-[14px]'>Price</label>
                            <div className='flex'>
                                <input type="number" placeholder='0' {...register("property_starting_price")} />
                                    <span className='text-[20px] mx-2'>-</span>
                                <input type="number" placeholder='100000' {...register("property_ending_price")} />
                            </div>
                        </div>
                    </div>

                    
                    <button type='submit' className='submit-btn rounded-xl mt-3'>Search</button>

                </Form>

            </section>
 
            <div className="search-items">
                <SearchItems userData={userData} />
            </div>
        </div>
    </div>
  )
}
