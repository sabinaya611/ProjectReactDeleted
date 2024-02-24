import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar" style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
      <div className="nav-items nav-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="traveller-style" style={{ marginLeft: '20px', position: 'absolute', left: '90px', fontSize: '46px', marginBottom: '13px', height: '63px' }}>
          <span style={{ color: 'white' }}>Travell</span>
          <span style={{ color: '#FF0000' }}>er</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/about_us" style={{ marginRight: '20px', marginLeft: '300px', textDecoration: 'none', color: 'white' }}>About Us</Link>
          <Link to="/services" style={{ marginRight: '20px', textDecoration: 'none', color: 'white' }}>Services</Link>
          <Link to="/packages" style={{ marginRight: '20px', textDecoration: 'none', color: 'white' }}>Packages</Link>
          <Link to="/contact" style={{ marginRight: '20px', textDecoration: 'none', color: 'white' }}>Contact</Link>
          <div className="dropdown-container">
            <div className="dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
              <button className="dropbtn" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>Pages <FaAngleDown /></button>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/destination" style={{ textDecoration: 'none', color: 'white' }}>Destination</Link>
                  <Link to="/booking" style={{ textDecoration: 'none', color: 'white' }}>Booking</Link>
                  <Link to="/travelguide" style={{ textDecoration: 'none', color: 'white' }}>TravelGuide</Link>
                  <Link to="/testimonals" style={{ textDecoration: 'none', color: 'white' }}>Testimonials</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
