import React from 'react'
import Button from './Button'

const FormSplitBill = () => {
  return (
   <form className='form-split-bill'> 
     <h2>Split a bill with X</h2>

     <label>💰Bill Value</label>
     <input type='text'/>
    <Button> Split bill </Button>
   </form>
  )
}

export default FormSplitBill