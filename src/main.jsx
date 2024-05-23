import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Section />
    <Footer />
  </React.StrictMode>,
)
