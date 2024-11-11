import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar'
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login_SignUp from './pages/Login_SignUp';
import OrderSubmit from './pages/OrderSubmit'
import CartState from './pages/CartContext';
import { CartContext } from './pages/CartContext';

function App() {
  return (<div>
    <div>
      <NavBar/>
      <CartState>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/shop-item/:id' element={<ProductDetails/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login_SignUp/>}/>
        <Route path='/Order' element={<OrderSubmit/>}/>
      </Routes>
      </CartState>
    </div>
  </div>);
}

export default App
