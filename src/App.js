import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Shop from '../src/Components/Shop/Shop';
import Contact from '../src/Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import Blogs from './Components/Blogs/Blogs';

import Navbars from './Components/Navbars/Navbars'
import Register from './Components/LogIn/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import AddItem from './Components/Shop/AddItem';
import MyItem from './Components/Shop/MyItem';



function App() {
  return (

    <div>
      <Navbars></Navbars>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/additem' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/products' element={
          <RequireAuth> <Shop></Shop></RequireAuth>
        }></Route>
        <Route path='/products/:productId' element={
          <RequireAuth> <ProductDetail></ProductDetail></RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
