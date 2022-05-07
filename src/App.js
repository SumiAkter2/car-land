import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Components } from 'react';
import { Route, Routes,BrowserRouter  } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Shop from '../src/Components/Shop/Shop';
import Contact from '../src/Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
   
   <div>
    
     
     <Routes>
       <Route path='/' element={ <Home></Home>}></Route>
       {/* <Route path='/home' element={ <Home></Home>}></Route> */}
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>

     <Footer></Footer>
   </div>
  );
}

export default App;
