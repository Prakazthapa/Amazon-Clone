import React from "react";
import "../header/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src="./amazonlogo.png" alt="amazon logo" />
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              id=""
              placeholder="search your products"
            />
            <div className="search_icon">
              <SearchIcon id-="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href=" " target="">
              Hello, Sign in
            </a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
