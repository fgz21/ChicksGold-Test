import React from 'react';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header-nav">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">CURRENCY</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">ITEMS</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">ACCOUNT</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">SERVICES</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">SWAP</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">SELL</a>
            <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
          </li>
        </ul>

        <section className="container-actions">
         <section className="button-usd">
            <a href="#" className="btn-usd">
              USD
              <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
            </a>
          </section>

          <section className="button-cart">
           <FontAwesomeIcon icon={faCartShopping} className="cart-shop" />
            <a href="#" className="btn-cart">
              CART(5)
            </a>
          </section>

          <section className="button-register">
            <a href="#" className="btn-login">
              SIGN IN
               <FontAwesomeIcon icon={faUser} className="user-icon" />
            </a>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default Header;

