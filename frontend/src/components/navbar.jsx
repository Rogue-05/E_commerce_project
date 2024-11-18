import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./navbar.css";
import axios from "axios";

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Show the menu
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5555/api/auth/logout", { withCredentials: true });
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="navbar-container">
      <div className="icon-container">
        <NavLink to="/">
          <img src="" alt="icon" />
        </NavLink>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-components-container ${menuOpen ? "show" : ""}`}>
        <div>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/Shop">
            <button>Shop</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/Cart">
            <button>Cart</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/ContactUs">
            <button>Contact Us</button>
          </NavLink>
        </div>

        <div className="userIcon" onClick={toggleMenu}>
          {user ? (
            <>
              <img src="icon.png" alt="user" className="userIconImg" />
              <div className={`userOptions ${menuOpen ? "show" : ""}`}>
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          )}
        </div>

      </div>
    </div>
  );

}
