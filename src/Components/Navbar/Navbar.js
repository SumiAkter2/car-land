import React from 'react';
import CustomLink from './CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div>
           <nav>
              <ul>
                  <li> <CustomLink to='/'>Home</CustomLink></li>
                  <li> <CustomLink to='/shop'>Shop</CustomLink></li>
                  <li> <CustomLink to='/contact'>Contact</CustomLink></li>
              </ul>
           </nav>
        </div>
    );
};

export default Navbar;