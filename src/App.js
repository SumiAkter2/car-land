import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Shop from '../src/Components/Shop/Shop';
import Contact from '../src/Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <div>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>

     <Footer></Footer>
   </div>
  );
}

export default App;
