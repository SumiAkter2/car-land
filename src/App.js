import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Shop from '../src/Components/Shop/Shop';
import Contact from '../src/Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import Blogs from './Components/Blogs/Blogs';
import ProductDetails from './Components/ProductDetails/ProductDetails';



function App() {
  return (
   
   <div>
     
     <Routes>
       <Route path='/' element={ <Home></Home>}></Route>
        {/* <Route path='/home' element={ <Home></Home>}></Route>  */}
       <Route path='/products' element={<Shop></Shop>}></Route>
       {/* <Route path='/product' element={<ProductDetails></ProductDetails>}></Route> */}
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
       
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes> 

     <Footer></Footer>
   </div>
  );
}

export default App;
