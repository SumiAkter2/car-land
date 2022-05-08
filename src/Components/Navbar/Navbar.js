import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink/CustomLink';
import './Navbar.css'


const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div >
            <nav className=''>
                <div className='logo'>
                    {/* <img src="279001429_1363797134096103_3960368898866996896_n.png" className='nav-logo' alt="" /> */}
                    <h1> The Car Land</h1>
                </div>
                <ul>
                    <li> <CustomLink to='/'>Home</CustomLink></li>
                    <li> <CustomLink to='/shop'>Shop</CustomLink></li>
                    <li> <CustomLink to='/contact'>Contact</CustomLink></li>
                    <li> <CustomLink to='/about'>About</CustomLink></li>
                    {
           user ?  <button className='btn btn-link text-white me-2 text-decoration-none fs-5 bg-dark' onClick={handleSignOut}>Sign out</button>:
           <li> <CustomLink to='/login'>LogIn</CustomLink> </li>}
                    

                </ul>
            </nav>
            <section className='container'>

            </section>
        </div>
    );
};
// btn btn-link text-white text-decoration-none
export default Navbar;