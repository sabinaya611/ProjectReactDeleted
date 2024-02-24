import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Jordan() {
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
        <Card.Title style={cardTitleStyle}>1.PETRA</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1675700394062-fc9c5d2c9b02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UEVUUkF8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Petra, a UNESCO World Heritage site in southern Jordan, is an ancient city renowned for its stunning rock-cut architecture. Carved into rose-red cliffs, Petra features iconic structures such as the Treasury and the Monastery. Dating back to the 6th century BC, this archaeological marvel served as the capital of the Nabataean Kingdom. Visitors can explore the intricate facades, tombs, and the intricate Siq canyon that leads to the heart of this historical gem.
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
        <Card.Title style={cardTitleStyle}>2.WADI RUM</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1675700463595-a43e915b6d2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V0FESSUyMFJVTSUyMGluJTIwam9yZGFufGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Wadi Rum, also known as the Valley of the Moon, is a captivating desert wilderness in southern Jordan. Renowned for its striking sandstone mountains and narrow canyons, Wadi Rum offers a surreal landscape often used as a backdrop in films. Visitors can engage in jeep tours, camel rides, or camping to experience the area's unique natural beauty and ancient petroglyphs. The protected desert area is a popular destination for those seeking adventure and a connection with Jordan's rich cultural heritage.
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
        <Card.Title style={cardTitleStyle}>3.JERASH</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1676139860466-8b8f71c0a737?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SkVSQVNIfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Jerash, located in northern Jordan, is an ancient Roman city known for its remarkably preserved ruins. With a history dating back to the 4th century BC, Jerash features grand colonnaded streets, theaters, temples, and arches. The site offers a vivid glimpse into Roman architecture and urban planning. Visitors can explore the well-preserved structures, including the Oval Plaza and the South Theater, and appreciate the city's historical significance.
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
        <Card.Title style={cardTitleStyle}>4.AJLUN CASTLE</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1509407336566-fca158fddcce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUpMVU4lMjBDQVNUTEV8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Ajlun Castle, situated in northern Jordan, is a medieval fortress dating back to the 12th century. Built by Salah ad-Din (Saladin) to defend against Crusader invasions, it commands impressive views of the surrounding countryside. The castle features well-preserved towers, passages, and battlements, showcasing Islamic military architecture. Visitors can explore its historic significance and enjoy panoramic vistas from its strategic hilltop location.
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
        <Card.Title style={cardTitleStyle}>5.KERAK CASTLE </Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1505552411588-51fce16351ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S0VSQUslMjBDQVNUTEUlMjBpbiUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Kerak Castle, located in southern Jordan, is a well-preserved medieval fortress dating back to the Crusader period. Built on a strategic hill, it offers commanding views of the surrounding landscape. The castle boasts imposing defensive structures, including thick walls, towers, and underground passageways. Kerak played a crucial role in the region's history, witnessing battles between Crusaders and Muslims. 
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

export default Jordan;
