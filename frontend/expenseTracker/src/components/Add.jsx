import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import Bgroup from './add/Bgroup'
import Form from './add/Form'

function Add() {
  return (
    <div>
{/* <style>
  {
    `
    .btn-secondary:active:focus {
    color: #ffffff,
    background-color: #161617,
    border-color: #3464a2,
  }
    `
  }
</style> */}
    
<Bgroup></Bgroup>
<Form></Form>
      
    </div>
  )
}

export default Add
