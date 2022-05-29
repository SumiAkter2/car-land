import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import CustomLink from './CustomLink/CustomLink'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div >

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand >The Car Land</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">

            </Nav>
            <Nav >

              <Nav.Link > < CustomLink to='/'>Home</CustomLink> </Nav.Link>

              <Nav.Link> <CustomLink to='/blogs'>Blog</CustomLink></Nav.Link>
              {user &&
                <Nav.Link> <CustomLink to='/products'>Inventory</CustomLink></Nav.Link>
              }

              {
                user && <Nav.Link> <CustomLink to='/additem'>Add Products</CustomLink></Nav.Link>
              }
              {
                user && <Nav.Link> <CustomLink to='/myitem'>My Items</CustomLink></Nav.Link>
              }
              {
                user && user.email
              }
              {
                user?.uid ? <button className='btn btn-link text-white me-2 text-decoration-none fs-5 bg-dark' onClick={handleSignOut}>Sign out</button> :
                  <Nav.Link>  <CustomLink to='/login'>LogIn</CustomLink></Nav.Link>}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </div>
  );
};



export default Navbars;