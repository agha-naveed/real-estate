import React, { useEffect, useInsertionEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export default function NewReceiptVoucher() {
  
  const [message, setMessage] = useState('')
  
  const { register, handleSubmit } = useForm()

  const [invoice, setInvoice] = useState([])

  const [inv_id, setInv_id] = useState('')

  const [receiveableAmount, setReceiveableAmount] = useState()
  
  const [receivedAmount, setReceivedAmount] = useState()

  const navigate = useNavigate()
  
  

  const onSubmit = (data) => {
    // console.log(data);

    // const res = axios.post("http://localhost:7000/api/add-property", data)
    // .then(response => setMessage(response.data));
    

    // if(!message) {
    //   setMessage(res.data);
    //   setTimeout(() => {
    //     navigate('/');
    //   }, 2000)
    // }
    // else {
    //   setMessage("Error Occured!");
    // }
  }

  useInsertionEffect(() => {
    let invoice_detail = async () => {
      try {
        let response = await axios.get("http://localhost:7000/api/invoice-details");
        setInvoice(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    invoice_detail()
  }, [])

  useEffect(() => {
    if(inv_id) {
      let invoice_recv_amount = async () => {
        try {
          let response = await axios.get(`http://localhost:7000/api/invoice-details/${inv_id}`);
          setReceiveableAmount(response.data.invoice_recievable_amount)
        } catch (err) {
          console.log(err);
        }
      };
      
      invoice_recv_amount()
    }
  }, [inv_id])
  
  let handlePropertyChange = (e) => {
    setInv_id(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='add-property-form xl:w-[600px] lg:w-[70%] w-full py-10 px-8'>
        <div>
          <div title='Invoice ID' className='grid'>
            <label htmlFor="in-id">Invoice Id</label>
            <select value={inv_id} {...register("invoice_id")} required onChange={handlePropertyChange} id="in-id">
              <option value="" defaultValue={true}>-- select --</option>
              {
                invoice.map((item, index) => {
                  return (
                    <option key={`inv-idx-${index}`} value={item.invoice_id}>{item.invoice_id}</option>
                  )
                })
              }
            </select>
          </div>

          <div>
            <label htmlFor="">RV Amount</label>
            <input type="number" readOnly value={receiveableAmount} />
          </div>
          
        </div>

        
        <div>
          <label htmlFor="">RV Amount</label>
          <input type="number" readOnly value={receiveableAmount} />
        </div>

      </Form>
      
    </div>
  )
}
