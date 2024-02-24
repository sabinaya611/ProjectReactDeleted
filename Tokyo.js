import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Tokyo() {
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
        <Card.Title style={cardTitleStyle}>1.HAMARIKYU GARDEN</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/923244238/photo/hamarikyu-public-gardens-and-modern-skyscrapers-of-shiodome-area-at-tokyo.webp?b=1&s=170667a&w=0&k=20&c=3qTi8Z3coz89Qhca6XHer-3dcrM7IpVLTeQ9p7A5i48="
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Hamarikyu Gardens, situated in Tokyo, Japan, is a traditional Japanese garden with a history dating back to the Edo period. Located at the mouth of the Sumida River, it seamlessly blends traditional and modern elements. The garden features tidal ponds, historic teahouses, and a picturesque landscape surrounded by skyscrapers. Visitors can enjoy seasonal flowers, a serene atmosphere, and a tea ceremony at the Nakajima Teahouse, making Hamarikyu Gardens a peaceful oasis in the bustling metropolis.

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
        <Card.Title style={cardTitleStyle}>2.TSUKIJI OUTER MARKET</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VFNVS0lKSSUyME9VVEVSJTIwTUFSS0VUJTIwdG9reW98ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Tsukiji Outer Market, located in Tokyo, Japan, is a bustling area adjacent to the former Tsukiji Fish Market. While the inner wholesale market moved to Toyosu, the outer market remains a popular destination for fresh seafood, produce, and street food. Visitors can savor a variety of Japanese dishes, including sushi, sashimi, and street snacks. The market also offers culinary utensils and unique local products, providing a vibrant and flavorful experience for food enthusiasts.   
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
        <Card.Title style={cardTitleStyle}>3.RIKUGIEN GARDENS</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1593862558435-44dcc3523255?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UklLVUdJRU4lMjBHQVJERU5TfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Rikugien Gardens, situated in Bunkyo, Tokyo, is a beautiful Japanese landscape garden designed during the Edo period. Completed in 1702, it features a central pond, walking paths, and strategically placed teahouses and pavilions. The garden is known for its seasonal beauty, with cherry blossoms in spring and vibrant autumn foliage. Rikugien Gardens is a designated Special Place of Scenic Beauty and offers a serene escape, allowing visitors to experience traditional Japanese aesthetics in the heart of Tokyo.
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
        <Card.Title style={cardTitleStyle}>4.ODAIBA SEASIDE PARK</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1619348813188-64a65c153485?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9EQUlCQSUyMFNFQVNJREUlMjBQQVJLfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Odaiba Seaside Park, located in Tokyo Bay, is a large waterfront park on the artificial island of Odaiba. The park offers a variety of recreational activities, including walking paths, green spaces, and sandy beaches. Visitors can enjoy views of the Rainbow Bridge, Tokyo Tower, and the city skyline. Odaiba Seaside Park is a popular destination for families, picnics, and outdoor events, providing a relaxing escape from the urban bustle of Tokyo.

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
        <Card.Title style={cardTitleStyle}>5.TOKYO NATIONAL MUSEUM</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1509285088694-c81631ecd32c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRPS1lPJTIwTkFUSU9OQUwlMjBNVVNFVU18ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Tokyo National Museum, situated in Ueno Park, is Japan's oldest and largest museum, showcasing an extensive collection of traditional and cultural artifacts. Established in 1872, the museum features over 110,000 items, including ceramics, samurai armor, and ancient scrolls. Its five main buildings house exhibits on Japanese art, archaeology, and Asian antiquities. With a focus on preserving and displaying Japan's cultural heritage, the Tokyo National Museum provides visitors with a comprehensive understanding of the country's rich history and artistic traditions.
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

export default Tokyo;
