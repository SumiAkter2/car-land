import React from 'react';
import { Form } from 'react-bootstrap';

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
        </div>
    );
};

export default LogIn;