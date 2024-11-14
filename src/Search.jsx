import React from 'react'
import { Form, Outlet } from 'react-router-dom'
import HeaderDiv from './HeaderDiv'
import { useForm } from 'react-hook-form'



export default function Search() {
    

  const { register, handleSubmit, watch } = useForm();
  const selectedValue = watch("size");

  return (
    <div className='search-section w-full'>
        <HeaderDiv value={"Search"} />
        <div className="container">
            
            <section className='search-values'>
                <Form action="" method='POST' className='search-form grid justify-center xl:w-[700px] lg:w-[70%] w-full py-10 px-8'>
                    
                    <div>
                        <label htmlFor="">Property Type</label>
                        <select name="" {...register("property_type")} id="">
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="land">Land</option>
                            <option value="mixuse">Mix-Used</option>
                        </select>
                    </div>

                    <div className='search-p-size'>
                        <label htmlFor="">Property Size (Sq.ft)</label>
                        <input type="text" placeholder='100' {...register("property_size")} />
                    </div>

                    <div>
                        <label htmlFor="as">City</label>
                        <input type="text" id='as' {...register("property_city")} />
                    </div>

                    <button type='submit' className='submit-btn rounded-xl mt-3'>Search</button>

                </Form>

            </section>

            <div className="search-items">
                <Outlet />
            </div>
        </div>
    </div>
  )
}
