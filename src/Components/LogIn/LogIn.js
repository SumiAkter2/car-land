import React, { useRef, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import './LogIn.css'

import Spinner from '../Spinner/Spinner';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import {  Link, useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password)
      signInWithEmailAndPassword(email, password)
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || sending) {
      return <Spinner></Spinner>
  }
  if (user) {
   navigate(from,{replace:true});
  }
  if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  const navigateRegister = event => {
      navigate('/register');
  }

  const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
          await sendPasswordResetEmail(email);
          Toast('Sent email');
      }
      else{
          Toast(' Enter your email address');
      }
  
  }
    return (
        <div className='container my-5 contact'>
           
            
           <Form className='w-50 mx-auto text-start' onSubmit={handleSubmit}>
            <h1 >Please login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary " type="submit" className='w-25 mx-auto'>
                    Login
                </Button>
                <p className=' mt-4 pe-auto ' onClick={navigateRegister}>Are  You Fresher?<Link className='text-decoration-none' to={'/register'}>Please Register</Link></p>
           

            {errorElement}
           
            <p className='text-start'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
           
</Form>

{/*=========================== or============= */}
<div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
            </div>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default LogIn;