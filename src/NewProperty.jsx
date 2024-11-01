import React from 'react'
import { Form } from 'react-router-dom'

export default function NewProperty() {
  return (
    <div>
      <Form method='POST'>
        <div>
          <label htmlFor="p_type">Property Type</label>
          <select name="" id="">
            <option value="">Residential</option>
            <option value="">Commercial</option>
            <option value="">Land</option>
            <option value="">Mix-Use</option>
          </select>
        </div>
      </Form>
      
    </div>
  )
}