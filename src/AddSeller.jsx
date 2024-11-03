import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export default function AddSeller() {

  
  const [message, setMessage] = useState('')

  const {register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {

    const res = axios.post("http://localhost:7000/api/add-new-seller", data)
    .then(response => setMessage(response.data));


    if(!message) {
      setMessage(res.data);
      setTimeout(() => {
        navigate('/');
      }, 2000)
    }
    else {
      setMessage("Error Occured!");
    }
  }

  

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='add-property-form xl:w-[600px] lg:w-[70%] w-full py-10 px-8'>
      <div>
        <label htmlFor="s-name">Seller Name</label>
        <input type="text" id='s-name' {...register("seller_name")} required />
      </div>
      
      <div>
        <label htmlFor="s-cell">Seller Cell No.</label>
        <input type="text" id='s-cell' {...register("seller_cell")} required />
      </div>

      <div>
        <label htmlFor="s-address">Seller Address</label>
        <textarea  id='s-address' {...register("seller_address")} className='!h-32' required ></textarea>
      </div>

      <input type="submit" className='submit-btn' name='add-seller-submit-btn' />

    </Form>
  )
}