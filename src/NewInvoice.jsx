import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export default function NewInvoice() {
  
    const [message, setMessage] = useState('')

    const {register, handleSubmit } = useForm()
  
    const navigate = useNavigate()
  
    const onSubmit = (data) => {
      console.log(data)
      const res = axios.post("http://localhost:7000/api/create-new-invoice", data)
      .then(response => setMessage(response.data)).catch(err => console.warn(err))
      
  
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
          <label htmlFor="prp-id">Property ID</label>
          <input type="number" id='prp-id' {...register("property_id")} required />
        </div>
        
        <div className='md:flex grid md:gap-5'>
            <div>
            <label htmlFor="buy-id">Buyer ID</label>
            <input type="number" id='buy-id' {...register("buyer_id")} required />
            </div>
    
            <div>
            <label htmlFor="sell-id">Seller ID</label>
            <input type="number" id='sell-id' {...register("seller_id")} required />
            </div>
        </div>

        <div className='md:flex grid md:gap-5'>
            <div>
            <label htmlFor="in-rec-amount">Recievable Amount</label>
            <input type="number" id='in-rec-amount' {...register("invoice_recievable_amount")} required />
            </div>

            <div>
            <label htmlFor="in-pay-amount">Payable Amount</label>
            <input type="number" id='in-pay-amount' {...register("invoice_payable_amount")} required />
            </div>
        </div>

        <div>
          <label htmlFor="in-comm-amount">Commission Amount</label>
          <input type="number" id='in-comm-amount' {...register("commission_amount")} required />
        </div>
        
  
        <input type="submit" className='submit-btn mt-2' name='add-invoice-submit-btn' />
  
      </Form>
    )
}
