import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Context/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, handellogOut } = useAuth();

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orders">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <span className="email-show-header">{user.displayName} </span>
        {user.email ? (
          <button className="log-out-btn" onClick={handellogOut}>
            LogOut
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
