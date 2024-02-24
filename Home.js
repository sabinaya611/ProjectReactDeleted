import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const glowBorder = `
  @keyframes glowBorder {
    0% {
      border-color: #FF0000; 
      box-shadow: 0 0 10px #FF0000; 
    }
    100% {
      border-color: #FF0000; 
      box-shadow: 0 0 10px #FF0000; 
    }
  }
`;

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const transparentBoxStyles = {
    margin: '0 auto',
    width: '1000px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 60px)',
  };

  const boxContentStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '700px',
    margin: '0 auto',
    border: '2px solid #FF0000', 
    animation: 'glowBorder 1.5s ease-in-out infinite', 
  };
  

  // Define your inline styles for the background
  const backgroundStyles = {
    backgroundImage: `url(${"https://img.freepik.com/premium-photo/top-view-travel-outfit-accessories-equipment-with-copy-space-black-background_146508-642.jpg?size=626&ext=jpg&ga=GA1.1.1584509933.1703320559&semt=ais"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  const backgroundStyle = {
    backgroundImage: `url(${"https://img.freepik.com/premium-photo/top-view-travel-outfit-accessories-equipment-with-copy-space-black-background_146508-642.jpg?size=626&ext=jpg&ga=GA1.1.1584509933.1703320559&semt=ais"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  const headingStyles = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: 'white', 
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '30px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  };

  const buttonStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#FF0000',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    marginRight: 0, 
    marginLeft: 'auto', 
  };

  const handleHover = {
    backgroundColor: '#0056b3',
  };

  const travellerStyle = {
    marginLeft: '20px', 
    position: 'absolute',
    left: '90px',
    fontSize: '46px',
    marginBottom: '13px',
    height: '63px',
  };

  const greenText = {
    color: 'white',
  };

  const greenEr = {
    color: '#FF0000', 
  };


  return (
    <div>
      
      <div className="carousel-container">
  <Navbar/>
  <Carousel showThumbs={false} autoPlay infiniteLoop>
    <div>
      <img src="https://img.freepik.com/premium-photo/monuments-world-glass-water_117023-902.jpg?w=740" alt="Image 1" />
    </div>
    <div>
      <img src="https://img.freepik.com/free-photo/view-traveling-items-wooden-background_23-2148971052.jpg?t=st=1708680372~exp=1708683972~hmac=b18e4535882d5b8a1a0e7facdbd51f59556c48d7b2aa054025c20a5691b49b53&w=740" alt="Image 2" />
    </div>
    <div>
      <img src="https://img.freepik.com/free-vector/hand-drawn-travel-background_52683-85205.jpg?t=st=1708679935~exp=1708683535~hmac=a2e4e0e3db09cc3e8f7bd59326aacb4d6a75a2336f3f0174239c39757e2752c9&w=740" alt="Image 3" />
    </div>
    <div>
      <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?t=st=1708682091~exp=1708685691~hmac=a0495b514c9355b3722089740598469820f7018620e675575365c344d5a581f2&w=900" alt="Image 4" />
    </div>
    {/* Add more slides as needed */}
  </Carousel>
  <br></br>
  <div className="content-overlay">
    <div className="image" style={backgroundStyle}>
      <div className="home" style={backgroundStyles}>
        <div style={transparentBoxStyles}>
          <div style={boxContentStyles}>
            <h2 style={headingStyles}>Explore the World With Us</h2>
            <p style={paragraphStyles}>
              "Welcome to our world of endless exploration and unforgettable journeys! At [TRAVELLER], we believe in turning dreams into reality. From breathtaking landscapes to cultural marvels, our curated tours promise an immersive experience."
            </p>
            <Link to="/about_us" style={{ ...buttonStyles, ...(showDropdown && handleHover) }}>
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Link to="/login" className="get-started-button">
    Get Started
  </Link>
</div>

      {/* Your other content */}
      
      <br></br>
      {/* Image that appears when scrolled down */}
      
      
      <div className="scrolled-image-container">
          <img 
            src="https://onlinetourandtravel.com/wp-content/uploads/2022/07/Onlinetourandtravel.com__Gujrat-banner-new.webp" 
            alt="" 
            style={{ width: '100%', height: '100%' }} // Adjust dimensions if necessary
          />
          <div className="text-overlay">
            .
          </div>
        </div>
        <br></br>
        
  {/* Another page with image */}
      <div className="another-page-with-image" style={{ position: 'relative', width: '100%', height: '400px' }}>
  <img 
    src="https://img.freepik.com/premium-photo/scenic-view-calm-sea-sunset_1048944-21706976.jpg?w=740" 
    alt="Image" 
    style={{ width: '100%', height: '200%' }} 
  />
  <div className="text-overlay" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '26px', fontWeight: 'bold' }}>
    <div style={{ color:'White', marginTop:'300px' }}>Special Tour in April, Discover Chardham for 100 customers with </div>
    <div style={{ backgroundColor: '#FF8000', display: 'inline', padding: '0 5px', borderRadius: '5px', color:'black', marginLeft:'290px' }}>discount 50%</div>
    <div style={{ color:'White', marginLeft:'200px', marginTop:'80px' }}>It's limited seating! Hurry up</div>
    
    {/* Additional sets of zeros */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
    <div style={{ backgroundColor: '#FF8000', color: 'black', fontSize: '60px', padding: '10px 20px', borderRadius: '10px', marginBottom: '10px' }}>0</div>
    <div style={{ color: 'white', fontSize: '20px' }}>Days</div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
    <div style={{ backgroundColor: '#FF8000', color: 'black', fontSize: '60px', padding: '10px 20px', borderRadius: '10px', marginBottom: '10px' }}>0</div>
    <div style={{ color: 'white', fontSize: '20px' }}>Hours</div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
    <div style={{ backgroundColor: '#FF8000', color: 'black', fontSize: '60px', padding: '10px 20px', borderRadius: '10px', marginBottom: '10px' }}>0</div>
    <div style={{ color: 'white', fontSize: '20px' }}>Minutes</div>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
    <div style={{ backgroundColor: '#FF8000', color: 'black', fontSize: '60px', padding: '10px 20px', borderRadius: '10px', marginBottom: '10px' }}>0</div>
    <div style={{ color: 'white', fontSize: '20px' }}>Seconds</div>
  </div>
</div>
  </div>
</div>
<br></br>

<Footer/>
</div>

  
  );
}

export default Home;
