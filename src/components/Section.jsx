import React from 'react';
import './styles/Section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

  const ProductCard = ({ product }) => {
    return (
      <section className="product-card">
        <section className="product-image-wrapper">
          <img src={product.image} alt={product.title} />
          <input type="number" min="1" defaultValue="1" className="quantity-input" />
        </section>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>Lorem ipsum, dolor sit amet.</p>
        <div className="product-actions"> 
          <button className="details-btn">DETAILS</button>
            <button className="add-btn">
              ADD <FontAwesomeIcon icon={faCartShopping} className="cart-shop" />
            </button>
        </div>
      </section>

    );
  };

  const ProductGrid = () => {
    const products = [
      { id: 1, title: 'AkuAku', price: 8.0, image: '/aku1.webp' },
      { id: 2, title: 'UkaUka', price: 10.00, image: '/UkaUka.webp' },
      { id: 3, title: 'VeloMask', price: 5.00, image: '/VeloMask.webp' },
      { id: 4, title: 'Sparx', price: 8.00, image: '/Sparx.webp' },
      { id: 5, title: 'RedBeaker', price: 13.00, image: '/RedBeaker.webp' },

      { id: 6, title: 'TNT', price: 8.00, image: '/TNTCrate.webp' },
      { id: 7, title: 'TripleBomb', price: 10.00, image: '/TripleBowlingBomb.webp' },
      { id: 8, title: 'Turbo', price: 5.00, image: '/Turbo.webp' },
      { id: 9, title: 'PowerShield', price: 8.00, image: '/BluePowerShield.webp' },
      { id: 10, title: 'Invisibility', price: 13.00, image: '/Invisibility.webp' },

      { id: 11, title: 'TripleMissile', price: 8.00, image: '/TripleMissile.webp' },
      { id: 12, title: 'SuperEngine', price: 10.00, image: '/SuperEngine.webp' },
      { id: 13, title: 'Electron Crash', price: 5.00, image: 'Electron_Crash_Icon.webp' },
      { id: 14, title: 'Electron Cortex', price: 8.00, image: 'Electron_Cortex_Icon.webp' },
      { id: 15, title: 'Electron Coco', price: 13.00, image: 'Electron_Coco.webp' },
      // Add more products as needed
    ];

    return (
      
      <section className="product-grid">
        <h2 className="product-title">Crash Bandicoot Items</h2>
        <section className="product-filters">
        <section class="filter-container">
            <select class="filter-select">
              <option value="">Select Items</option>
              <option value="Category">Category </option>
              <option value="Category">Category </option>
              <option value="Category">Category </option>
            </select>
        </section>

        <section>
          <input type="text" className="product-search" placeholder="Search" />
        </section>

       <section className="sort-container">
        <section className="sort-wrapper">
          <FontAwesomeIcon icon={faSackDollar} className="sort-icon" />
          <select className="sort-select">
            <option value="">All Price</option> 
            <option value="Category">Category </option>
            <option value="Category">Category </option>
            <option value="Category">Category </option>
          </select>
        </section>
      </section>

       <section className="type-container">
        <section className="type-wrapper">
          <FontAwesomeIcon icon={faSliders} className="sort-icon" />
          <select className="type-select">
            <option value="">Item Type</option>  
            <option value="categoria1">Category</option>
            <option value="categoria2">Category</option>
            <option value="categoria3">Category</option>
          </select>
        </section>
      </section>
     </section>

        <section className="product-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

          <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </section> 
  );
};

export default ProductGrid;