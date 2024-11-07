import axios from 'axios'
import React, { useState, useInsertionEffect, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export default function NewInvoice() {
  
    const [message, setMessage] = useState('')

    const {register, handleSubmit } = useForm()
  
    const navigate = useNavigate()

  
    const [selectedPropertyId, setSelectedPropertyId] = useState('');
    const [selectedBuyerId, setSelectedBuyerId] = useState('');
    const [buyerID, setBuyerID] = useState('');
    const [buyerName, setBuyerName] = useState('');

    const [sellerID, setSellerID] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [payableAmount, setPayableAmount] = useState('');

    // Getting Data


    const [userData, setUserData] = useState([]);
  


    useInsertionEffect(() => {
      let propertyData = async () => {
        try {
          let response = await axios.get("http://localhost:7000/api/properties");
          setUserData(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      propertyData();
    }, []);
    

    useEffect(() => {
      if (selectedPropertyId) {
          let propertyData = async () => {
            let response = await axios.get(`http://localhost:7000/api/property-details/${selectedPropertyId}/seller-p_price`);
              setSellerID(response.data.seller_id);
              setSellerName(response.data.seller_name);
              setPayableAmount(response.data.property_price);
            }    
        propertyData()
      }
    }, [selectedPropertyId]);


  const handlePropertyChange = (e) => {
    setSelectedPropertyId(e.target.value);
  };




  useInsertionEffect(() => {
    let buyerData = async () => {
      try {
        let response = await axios.get("http://localhost:7000/api/property-details");
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    buyerData();
  }, []);


  useEffect(() => {
    if (selectedBuyerId) {
        let buyerData = async () => {
          let response = await axios.get(`http://localhost:7000/api/buyer-details/${setSelectedBuyerId}`);
            setBuyerName(response.date.buyer_name);
          }    
      buyerData()
    }
  }, [selectedBuyerId]);


const handleBuyerChange = (e) => {
  setSelectedBuyerId(e.target.value);
};

    // Getting Data Ended




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
  
  
    // return (
    //   <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='add-property-form xl:w-[600px] lg:w-[70%] w-full py-10 px-8'>
    //     <div>
    //       <label htmlFor="prp-id">Property ID</label>
    //       <input type="number" id='prp-id' {...register("property_id")} required />
    //     </div>
        
    //     <div className='md:flex grid md:gap-5'>
    //         <div>
    //         <label htmlFor="buy-id">Buyer ID</label>
    //         <input type="number" id='buy-id' {...register("buyer_id")} required />
    //         </div>
    
    //         <div>
    //         <label htmlFor="sell-id">Seller ID</label>
    //         <input type="number" id='sell-id' {...register("seller_id")} required />
    //         </div>
    //     </div>

    //     <div className='md:flex grid md:gap-5'>
    //         <div>
    //         <label htmlFor="in-rec-amount">Recievable Amount</label>
    //         <input type="number" id='in-rec-amount' {...register("invoice_recievable_amount")} required />
    //         </div>

    //         <div>
    //         <label htmlFor="in-pay-amount">Payable Amount</label>
    //         <input type="number" id='in-pay-amount' {...register("invoice_payable_amount")} required />
    //         </div>
    //     </div>

    //     <div>
    //       <label htmlFor="in-comm-amount">Commission Amount</label>
    //       <input type="number" id='in-comm-amount' {...register("commission_amount")} required />
    //     </div>
        
  
    //     <input type="submit" className='submit-btn mt-2' name='add-invoice-submit-btn' />
  
    //   </Form>
    // )



    return (
      <Form onSubmit={handleSubmit(onSubmit)} method='POST' className='add-property-form xl:w-[600px] lg:w-[70%] w-full py-10 px-8'>
        
          <div>
            <label htmlFor="prp-id">Property ID</label>
            <select value={selectedPropertyId} onChange={handlePropertyChange}>
                <option value="" defaultValue={true}>Select a property</option>
              {
                userData.map((item, index) => {
                  return (
                    <option key={`p_id_selec_${index}`} value={item.property_id}>{item.property_id}</option>
                  )
                })
              }
            </select>

          </div>

        <div className='flex gap-5'>
          <div>
            <label htmlFor="buy-id">Buyer ID</label>
            <select value={selectedPropertyId} id='buy-id' {...register("buyer_id")} onChange={handlePropertyChange}>
                <option value="" defaultValue={true}>Select a property</option>
              {
                userData.map((item, index) => {
                  return (
                    <option key={`p_id_selec_${index}`} value={item.property_id}>{item.property_id}</option>
                  )
                })
              }
            </select>

          </div>

          <div>
            <label htmlFor="buy-name">Buyer Name</label>
            <input type="text" id='buy-name' {...register("buyer_name")} readOnly required />
          </div>

        </div>
        
      
        <div className='md:flex grid md:gap-5'>
          
          <div>
            <label htmlFor="sell-id">Seller ID</label>
            <input type="id" id='sell-id' value={sellerID} {...register("seller_id")} required readOnly />
          </div>

          <div>
            <label htmlFor="sell-name">Seller Name</label>
            <input type="text" id='sell-name' value={sellerName} required readOnly />
          </div>

        </div>


        <div className='md:flex grid md:gap-5'>
            <div>
            <label htmlFor="in-rec-amount">Recievable Amount</label>
            <input type="number" id='in-rec-amount' {...register("invoice_recievable_amount")} required />
            </div>

            <div>
            <label htmlFor="in-pay-amount">Payable Amount</label>
            <input type="number" id='in-pay-amount' value={payableAmount} {...register("invoice_payable_amount")} required  readOnly />
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
