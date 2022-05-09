import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './LogIn.css'

import Spinner from '../Spinner/Spinner';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import {  useNavigate } from 'react-router-dom';

const LogIn = () => {
  
   
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword, user, loading, error
        
      ] = useSignInWithEmailAndPassword(auth);
    
    
      
        
        // if (user) {
        //   return (
        //     <div>
        //       <p>Signed In User: {user.email}</p>
        //     </div>
        //   );
        // }
    

    if(loading ){
        return (<Spinner ></Spinner>);
    }

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    if (user  ) {
        navigate('/shop');
    }
    return (
        <div className='container my-5 contact'>
           
            <Form className='w-50 mx-auto'>
            <h1 className='my-4'>Please Log In</h1>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    <br />
    <Form.Control className='w-25 ' type="submit" value={"Submit"} onClick={() => signInWithEmailAndPassword(email, password)} />
  </Form.Group>
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