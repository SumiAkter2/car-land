import React from 'react';
import { Form } from 'react-bootstrap';
import './LogIn.css'


const LogIn = () => {
    return (
        <div className='container my-5'>
           
            <Form className='w-50 mx-auto'>
            <h1 className='my-4'>Please Log In</h1>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <br />
    <Form.Control className='w-25 ' type="submit" value={"Submit"} />
  </Form.Group>
</Form>
{/*=========================== or============= */}
<div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
            </div>
{/*======================= Google sign In================ */}
          <div className='login-logo text-center'>
         <h5> <img  src="Google.jpg" alt="" />oogle Sign In</h5>
          </div>
        </div>
    );
};

export default LogIn;