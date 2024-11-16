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
                    
                    <div className='flex'>
                        <div className='search-p-size grid w-1/3'>
                            <label htmlFor="" className='text-[14px]'>Property Size (Sq.ft)</label>
                            <input type="text" placeholder='100' {...register("property_size")} />
                        </div>

                        <div>
                            <label htmlFor="as">City</label>
                            <input type="text" id='as' {...register("property_city")} />
                        </div>
                    </div>
                    
                    
                    <div>
                        <label htmlFor="">Property Type</label>
                        <select name="" {...register("property_type")} id="">
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="land">Land</option>
                            <option value="mixuse">Mix-Used</option>
                        </select>
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
