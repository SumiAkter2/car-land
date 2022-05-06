
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Shop from '../src/Components/Shop/Shop';
import Contact from '../src/Components/Contact/Contact';
import './App.css';

function App() {
  return (
   <div>
     <h1>Hello World</h1>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
   </div>
  );
}

export default App;
