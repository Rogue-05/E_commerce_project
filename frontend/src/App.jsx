import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import CartState from '../context/CartContext';
import SignUp from './pages/SignUp';
import UserContextProvider from '../context/UserContext';

function App() {
  const location = useLocation();

  return (
    <div>
      <UserContextProvider>
        {/* Only render NavBar if not on the home page */}
        {location.pathname !== '/' && <NavBar />}
        <CartState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/shop-item/:id" element={<ProductDetails />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </CartState>
      </UserContextProvider>
    </div>
  );
}

export default App;
