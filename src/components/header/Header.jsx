import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

// Import các assets (logo, icons)
import logo from '../../assets/images/Logo_HVN.png'; 
import searchIcon from '../../assets/icons/Search_icon.png'; 
import cartIcon from '../../assets/icons/Cart_icon.png'; 
import userIcon from '../../assets/icons/User_icon.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/about">
            <img src={logo} alt="HVN Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/categories">Thuê xe</Link>
            </li>
            <li>
              <Link to="/about">Bảo dưỡng</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </nav>

        {/* Icons (Search, Cart, User) */}
        <div className="header-icons">
          <Link to="/search" aria-label="Search">
            <img src={searchIcon} alt="Search" className="icon" />
          </Link>
          <Link to="/cart" aria-label="Cart">
            <img src={cartIcon} alt="Cart" className="icon" />
          </Link>
          <Link to="/signin" aria-label="User Profile">
            <img src={userIcon} alt="User" className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;