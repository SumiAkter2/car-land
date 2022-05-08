import React from 'react';
import CustomLink from './CustomLink/CustomLink';
import './Navbar.css'
const Navbar = () => {
    return (
        <div >
            <nav className=''>
                <div className='logo'>
                    <img src="279001429_1363797134096103_3960368898866996896_n.png" className='nav-logo' alt="" />
                    <h1> The Car Land</h1>
                </div>
                <ul>
                    <li> <CustomLink to='/'>Home</CustomLink></li>
                    <li> <CustomLink to='/shop'>Shop</CustomLink></li>
                    <li> <CustomLink to='/contact'>Contact</CustomLink></li>
                </ul>
            </nav>
            <section>

            </section>
        </div>
    );
};

export default Navbar;