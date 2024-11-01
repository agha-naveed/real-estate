import React from 'react'
import { Form } from 'react-router-dom'

export default function NewProperty() {
  return (
    <div>
      <Form method='POST' className='add-property-form lg:w-[55%] py-10 px-8'>

      
        <div className='flex gap-5'>
          <div title='Write a SellerID that should be Specified!' className='grid'>
            <label htmlFor="s-id">Seller Id</label>
            <input type="number" required name='seller_id' id='s-id' />
          </div>

          <div className='grid'>
            <label htmlFor="p-type">Property Type</label>
            <select name="property_type" required id="p-type">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
              <option value="mixuse">Mix-Use</option>
            </select>
          </div>

        </div>

        <div className='flex gap-5'>
          <div>
            <label htmlFor="p-size">Size (sq. ft)</label>
            <input type="number" required name='property_size' id='p-size' placeholder='E.g: 100...' />
          </div>
          
          <div>
            <label htmlFor="p-price">Price (in pkr)</label>
            <input type="number" required name='property_price' id='p-price' placeholder='E.g: 100000' />
          </div>
        </div>

        <div>
          <label htmlFor="p-city">City</label>
          <select name="property_city" required id="p-city">
            <option value="" defaultValue={true}>-- select --</option>
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Skardu">Skardu</option>
          </select>
        </div>
        
        <div className='flex gap-5'>
          <div>
            <label htmlFor="p-state">State</label>
            <input type="text" required name='property_state' id='p-state' />
          </div>
          
          <div>
            <label htmlFor="p-zip">Zip Code</label>
            <input type="text" required name='property_zip' id='p-zip' />
          </div>
        </div>

        <div>
          <label htmlFor="p-location">Full Address</label>
          <textarea name="property_location" className='!h-28' placeholder='e.g: 1600 Amphitheatre Parkway in Mountain View, California' id="p-location"></textarea>
        </div>

        <input type="submit" className='submit-btn' name='add-property-submit-btn' />

      </Form>
      
    </div>
  )
}