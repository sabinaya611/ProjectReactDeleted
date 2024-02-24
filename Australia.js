import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Australia() {
  const cardStyle = {
    width: '1000px',
    margin: '20px auto',
    marginBottom: '100px',
    marginTop: '80px',
  };

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '1000px',
  };

  const cardTitleStyle = {
    fontSize: '40px',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '2px',
    textAlign: 'center',
  };
  const cardTextStyle = {
    fontSize: '16px', // Adjusted font size
  };
  const bookNowButtonStyle = {
    fontSize: '18px',
    color: 'white',
    backgroundColor: 'blue',
    marginLeft: '200px',
    borderRadius: '15px',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    display: 'flex',          // Center horizontally
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',      // Center vertically
  };
  return (
    <>
      <div className="ima1">
        <Card.Title style={cardTitleStyle}>1.THE SYDNEY HARBOUR BRIDGE</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VEhFJTIwU1lETkVZJTIwSEFSQk9VUiUyMEJSSURHRXxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Sydney Harbour Bridge, an iconic landmark in Australia, is a steel through-arch bridge spanning Sydney Harbour. Completed in 1932, it connects the central business district with the North Shore. Standing at 134 meters tall, it offers panoramic views of the Sydney Opera House and the harbor. The bridge is not only a vital transportation link but also a symbol of Sydney's skyline and engineering achievement.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $XXX
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="ima2">
        <Card.Title style={cardTitleStyle}>2.THE GREAT OCEAN ROAD</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1519381172058-72588ec7351b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Great Ocean Road, located in Victoria, Australia, is a stunning coastal highway renowned for its scenic beauty. Stretching over 240 kilometers, it winds along the Southern Ocean, offering breathtaking views of cliffs, beaches, and the iconic Twelve Apostles rock formations. The road provides access to lush rainforests, charming seaside towns, and natural attractions like Loch Ard Gorge. A popular tourist drive, the Great Ocean Road is celebrated for its picturesque landscapes and diverse ecosystems.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima2">
        <Card.Title style={cardTitleStyle}>3.ULURU-KATA TJUTA NATIONAL PARK</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1583668928323-0d810eec29dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VUxVUlUlMjBLQVRBJTIwVEpVVEElMjBOQVRJT05BTCUyMFBBUkt8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Uluru-Kata Tjuta National Park, located in Australia's Northern Territory, is a UNESCO World Heritage site known for its iconic red sandstone formations. Uluru, also known as Ayers Rock, is a colossal monolith that holds cultural significance for the Indigenous Anangu people. Nearby Kata Tjuta, or the Olgas, features a series of ancient domed rock formations. Visitors can experience the park's unique landscapes, rich Indigenous culture, and stunning sunsets, making it a sacred and mesmerizing destination in the Australian Outback.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima4">
        <Card.Title style={cardTitleStyle}>4.SYDNEY OPERA HOUSE</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1584772121849-56c717d6c542?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U1lETkVZJTIwT1BFUkElMjBIT1VTRXxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Sydney Opera House, an architectural marvel in Australia, is a UNESCO World Heritage site and an iconic symbol of Sydney. Designed by Jørn Utzon, it was completed in 1973 and features distinctive sail-like structures. Hosting a variety of performances, the Opera House stands on Bennelong Point, offering stunning views of Sydney Harbour and the city skyline. Its innovative design and cultural significance make it a must-visit landmark in the Southern Hemisphere.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima5">
        <Card.Title style={cardTitleStyle}>5.GREAT BARRIER REEF</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R1JFQVQlMjBCQVJSSUVSJTIwUkVFRnxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Great Barrier Reef, located off the coast of Queensland, Australia, is the world's largest coral reef system. Stretching over 2,300 kilometers, it is home to a vast array of marine life, including vibrant coral formations and diverse species of fish. The reef, a UNESCO World Heritage site, attracts snorkelers and divers from around the globe. Threatened by climate change and other environmental factors, its conservation remains a global concern.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Repeat the above structure for other cards */}
    </>
  );
}

export default Australia;
