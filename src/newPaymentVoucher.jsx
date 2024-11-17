import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';


export default function NewPaymentVoucher() {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, setValue } = useForm(); // Use setValue from react-hook-form

  const [invoice, setInvoice] = useState([]);
  const [inv_id, setInv_id] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const res = await axios.post("http://localhost:7000/api/create-new-payment-voucher", data);
    setMessage(res.data);

    if (res.data) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setMessage("Error Occurred!");
    }
  };

  useEffect(() => {
    const invoice_detail = async () => {
      try {
        let response = await axios.get("http://localhost:7000/api/invoice-details");
        setInvoice(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    invoice_detail();
  }, []);

  useEffect(() => {
    if (inv_id) {
      const invoice_recv_amount = async () => {
        try {
          let response = await axios.get(`http://localhost:7000/api/invoice-details/${inv_id}`);
          setPayableAmount(response.data.invoice_payable_amount);
        } catch (err) {
          console.log(err);
        }
      };
      invoice_recv_amount();
    }
  }, [inv_id]);


  const handlePropertyChange = (e) => {
    setInv_id(e.target.value);
  };

  const balanceCalc = (e) => {
    const num = +e.target.value;
    const remaining = payableAmount - num;
    setRemainingAmount(remaining);
    setValue('remaining_amount', remaining); // Use setValue to update remaining_amount in react-hook-form
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='add-property-form xl:w-[600px] lg:w-[70%] w-full py-10 px-8'>
        <div>
          <div title='Invoice ID' className='grid'>
            <label htmlFor="in-id">Invoice Id</label>
            <select value={inv_id} {...register("invoice_id")} required onChange={handlePropertyChange} id="in-id" >
              <option value="" defaultValue={true}>-- select --</option>
              {
                invoice.map((item, index) => (
                  <option key={`inv-idx-${index}`} value={item.invoice_id}>{item.invoice_id}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="">PV Amount</label>
            <input type="number" readOnly value={payableAmount} />
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <label htmlFor="">Paid Amount</label>
            <input type="number" onInput={balanceCalc} {...register("paid_amount")} />
          </div>

          <div>
            <label htmlFor="">Remaining Amount</label>
            <input type="number" {...register("remaining_amount")} readOnly value={remainingAmount} />
          </div>
        </div>

        <button className='submit-btn w-full rounded-lg mt-2' type='submit'>Submit</button>
      </Form>
    </div>
  );
}
