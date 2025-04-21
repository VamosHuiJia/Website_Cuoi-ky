// src/App.jsx
import React from 'react';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer';
import SignIn from './Log_in/Sign_in/Sign_in';
import Home from "./pages/home/HomePage";
import AboutUs from './pages/about_us/aboutus'; 
import ContactUs from "./pages/contact/Contactus";
import Products from "./pages/product/Product";
import ProductCard from "./pages/product/ProductCard";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="/categories" element={<h1>Categories Page</h1>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
