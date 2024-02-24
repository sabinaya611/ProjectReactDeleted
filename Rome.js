import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Rome() {
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
        <Card.Title style={cardTitleStyle}>1.PANTEON</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1640082118908-943f99331151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UEFOVEVPTnxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Pantheon, located in Rome, Italy, is a well-preserved ancient Roman temple dedicated to all the gods. Constructed in the 2nd century AD, its iconic dome and classical architecture showcase the engineering marvels of the time. The interior features an open oculus at the top, allowing natural light to illuminate the space. Serving various purposes throughout history, the Pantheon stands as a remarkable testament to Roman architectural ingenuity.
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
        <Card.Title style={cardTitleStyle}>2.TREVI FOUNTAIN </Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1676391399745-b08a99a19b51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VFJFVkklMjBGT1VOVEFJTnxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Trevi Fountain, a Baroque masterpiece in Rome, is one of the world's most famous fountains. Completed in 1762, it features a central statue of Neptune surrounded by mythical sea creatures. Visitors toss coins over their shoulders into the fountain, a tradition believed to ensure a return to Rome. The fountain's grandeur, intricate sculptures, and lively atmosphere make it a captivating landmark in the heart of the city.
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
        <Card.Title style={cardTitleStyle}>3.ROMAN FORUM</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1693256457845-0585380de3c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uk9NQU4lMjBGT1JVTXxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Roman Forum, located in the center of Rome, is a vast archaeological site showcasing the heart of ancient Rome's civic and social life. Surrounded by ruins of significant structures like the Temple of Saturn and the Arch of Septimius Severus, it served as a hub for political, religious, and commercial activities. The site provides insights into the city's history, featuring remnants of temples, basilicas, and the iconic Senate House. The Roman Forum stands as a captivating open-air museum, allowing visitors to immerse themselves in the rich history of the Roman Republic and Empire.
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
        <Card.Title style={cardTitleStyle}>4.VATICAN CITY</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1676393904171-738ff11eceaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VkFUSUNBTiUyMENJVFl8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Vatican City, an independent city-state surrounded by Rome, is the smallest country in the world and the spiritual center of the Catholic Church. Home to St. Peter's Basilica and the Vatican Museums, it showcases an impressive collection of art, including Michelangelo's masterpiece, the Sistine Chapel ceiling. The Vatican is also the residence of the Pope, and visitors can explore the iconic St. Peter's Square and the Apostolic Palace. This cultural and religious enclave draws millions of visitors annually for its historical, artistic, and spiritual significance.
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
        <Card.Title style={cardTitleStyle}>5.COLOSSEUM</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1676037249901-07b05f763638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q09MT1NTRVVNfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Colosseum, an ancient Roman amphitheater, is an iconic symbol of Rome's grandeur. Completed in 80 AD, it could host over 50,000 spectators for gladiatorial contests and public spectacles. The colossal structure is a marvel of ancient engineering with its massive stone arches and tiered seating. Today, the Colosseum stands as a testament to Roman architectural prowess and is a major tourist attraction, drawing millions each year to explore its historic significance.
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

export default Rome;
