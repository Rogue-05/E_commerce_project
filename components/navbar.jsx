import { NavLink } from "react-router-dom";


export default function NavBar(){
  return (
    <div className="navbar-container">
    <div className="icon-container">
      <NavLink to="/">
        <img src="icon.png" alt="icon" /> 
      </NavLink>
    </div>
    <div className="nav-components-container">
      <div>
        <NavLink to={'/'}>
        <button>Home</button>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/Shop'}>
        <button>Shop</button>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/Cart'}>
        <button>Cart</button>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/ContactUs'}>
        <button>Contact Us</button>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/login_signup'}>
         <img src="icon.png" alt="user" className="user"></img>
        </NavLink>
      </div>
    </div>
  </div>
  
  );
}