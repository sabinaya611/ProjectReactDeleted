import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function NewYork() {
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
        <Card.Title style={cardTitleStyle}>1.STATUE OF LIBERTY</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1585155967849-91c736589c84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U1RBVFVFJTIwT0YlMjBMSUJFUlRZfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Statue of Liberty, a symbol of freedom and democracy, stands on Liberty Island in New York Harbor. A gift from France to the United States, it was dedicated in 1886. Designed by Frédéric Auguste Bartholdi, the statue represents Libertas, the Roman goddess of freedom. Visitors can take ferries to the island, explore the museum, and enjoy panoramic views of the Manhattan skyline from the pedestal or crown. The Statue of Liberty is an enduring symbol of the United States and a UNESCO World Heritage site.
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
        <Card.Title style={cardTitleStyle}>2.TIMES SQUARE
</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGltZXMlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Times Square, located in the heart of Manhattan in New York City, is a vibrant commercial and entertainment hub known for its dazzling billboards and theaters. Formerly known as Longacre Square, it was renamed in 1904 after The New York Times moved its headquarters to the area. Times Square is famous for its electrifying atmosphere, Broadway theaters, and the iconic New Year's Eve ball drop celebration. The bustling square attracts millions of visitors each year, making it one of the most iconic and energetic destinations in the world.
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
        <Card.Title style={cardTitleStyle}>3.CENTRAL PARK</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q0VOVFJBTCUyMFBBUkt8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          Central Park, situated in the heart of Manhattan in New York City, is a sprawling urban oasis and one of the most famous public parks globally. Designed by Frederick Law Olmsted and Calvert Vaux, it covers 843 acres and offers a diverse landscape of lakes, meadows, and wooded areas. Visitors can enjoy activities such as walking, biking, boating, and exploring attractions like Bethesda Terrace, Bow Bridge, and the Central Park Zoo. Central Park serves as a recreational haven and cultural landmark, providing a peaceful escape from the bustling city.

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
        <Card.Title style={cardTitleStyle}>4.EMPIRE STATE BUILDING</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1671810266166-365ec538d80f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RU1QSVJFJTIwU1RBVEUlMjBCVUlMRElOR3xlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Empire State Building, an iconic skyscraper in Midtown Manhattan, New York City, is a symbol of architectural and engineering achievement. Completed in 1931, it stands at 1,454 feet (443.2 meters) and was the tallest building in the world at the time of its completion. With its Art Deco design, the Empire State Building offers panoramic views of the city from its observation deck. Recognized as one of the Seven Wonders of the Modern World, it remains a prominent feature of the New York skyline and a popular tourist attraction.

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
        <Card.Title style={cardTitleStyle}>5.METROPOLITAN MUSEUM OF ART</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1608552938503-9211bf554f22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUVUUk9QT0xJVEFOJTIwTVVTRVVNJTIwT0YlMjBBUlR8ZW58MHx8MHx8fDA%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Metropolitan Museum of Art, commonly known as the Met, is one of the world's largest and most prestigious art museums. Located on the eastern edge of Central Park in New York City, it spans over 2 million square feet. The Met's vast collection encompasses art and artifacts from various cultures and time periods, including ancient Egyptian artifacts, European paintings, and American decorative arts. The museum's iconic steps and diverse exhibitions make it a cultural landmark attracting millions of visitors each year.
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

export default NewYork;
