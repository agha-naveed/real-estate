import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export default function AddBuyer() {

  
  const [message, setMessage] = useState('')

  const {register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {

    const res = axios.post("http://localhost:7000/api/add-new-buyer", data)
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
        <label htmlFor="b-name">Buyer Name</label>
        <input type="text" id='b-name' {...register("buyer_name")} required />
      </div>
      
      <div>
        <label htmlFor="b-cell">Buyer Cell No.</label>
        <input type="text" id='b-cell' {...register("buyer_cell")} required />
      </div>

      <div>
        <label htmlFor="b-address">Buyer Address</label>
        <textarea  id='b-address' {...register("buyer_address")} className='!h-32' required ></textarea>
      </div>

      <input type="submit" className='submit-btn' name='add-buyer-submit-btn' />

    </Form>
  )
}