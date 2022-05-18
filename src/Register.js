import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
 
  return (
    <div>
      <div className='registerCon'>
        <h1>Register Form</h1>
        <form>
            <input type="text" placeholder='Name & Surname' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Contact' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button type='submit'>Register User</button>
        </form>
      </div>
    </div>
  )
}

export default Register
