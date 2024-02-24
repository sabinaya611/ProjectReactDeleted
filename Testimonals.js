import React from 'react';
import { FaStar } from 'react-icons/fa';
import Navbar from './Navbar';
const TestimonialsPage = () => {
  
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      location: 'New York',
      rating: 5,
      content: 'Had an amazing experience with Traveller Travels. The booking process was easy, and the trip exceeded my expectations. Will definitely use their services again! The tour guides were knowledgeable, and the local cuisine recommendations were superb. Overall, a memorable journey!',
      image: 'https://media.istockphoto.com/id/1256127007/photo/close-up-portrait-of-his-he-nice-attractive-glad-cheerful-cheery-guy-pointing-forefinger.webp?b=1&s=170667a&w=0&k=20&c=3wxx_FOljVpB6BTWS6F78g6dBU42jrzuInOJrtEBQ0U=',
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'London',
      rating: 4,
      content: 'Our family vacation was fantastic, thanks to Traveller . Great customer service and seamless booking. Highly recommend! The city tour was informative, and the historic landmarks were captivating. A delightful experience for the whole family!',
      image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      location: 'Australia',
      rating: 5,
      content: 'Outstanding service from Traveller Travel Agency. The itinerary was well-planned, and the guides were knowledgeable. Can\'t wait for the next adventure! The cultural diversity tour was eye-opening, and the local guides provided valuable insights into the rich history of the region.',
      image: 'https://media.istockphoto.com/id/1192313124/photo/pensive-customer-thinking-over-special-offer.webp?b=1&s=170667a&w=0&k=20&c=gTgnXdKsTxNYmHyU3AAyrH9zdUDbkNRBtrSEuMvsfv4=',
    },
    {
      id: 4,
      name: 'Michael Brown',
      location: 'Rome',
      rating: 4,
      content: ' Roman adventure with Traveller Adventures was truly enchanting. The tour guides, both knowledgeable and friendly, added a personal touch to every exploration. Accommodations were a delightful surprise. Outdoor activities were a thrilling dreamched . PQR Adventures proved an excellent choice, ensuring future bookings. 4-star rating reflects overall satisfaction.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAzfHxwZXJzb258ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 5,
      name: 'Emily Wilson',
      location: 'Paris',
      rating: 5,
      content: 'A magical experience with Traveller Agency. The city tour was breathtaking, and the customer service was top-notch. Highly recommended! The cultural immersion program was enlightening, and the art galleries showcased the rich artistic heritage of the city.',
      image:'https://images.unsplash.com/photo-1568553744327-1efafbc80c5e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTY2fHxwZXJzb258ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 6,
      name: 'David Martinez',
      location: 'Jordan',
      rating: 4,
      content: 'Great time with Traveller Travel Agency. The cultural immersion tour was fantastic, and the local cuisine recommendations were spot-on. The historical landmarks and architectural wonders made the trip memorable. A must-visit destination!',
      image: 'https://images.unsplash.com/photo-1610611666931-8789fd05e006?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE5fHxwZXJzb258ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 7,
      name: 'Sophie Lee',
      location: 'Tokyo',
      rating: 5,
      content: 'Unforgettable trip with Traveller Explorers. The cherry blossom tour was a dream come true. Excellent service and attention to detail. The traditional tea ceremonies and serene gardens created a serene and memorable experience.',
      image: 'https://media.istockphoto.com/id/1476622031/photo/portrait-of-happy-businesswoman-video-confidence-on-white-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=6ksWNU4T7C9o7XkHop6gGNMgr9qxNqRNYwY6NABJLdQ=',
    },
    {
      id: 8,
      name: 'Ryan Adams',
      location: 'Greece',
      rating: 4,
      content: ' Adventure with Traveller was amazing. The wildlife encounters were breathtaking, and the guides were knowledgeable. The cultural experiences with local communities added depth to the journey.',
      image: 'https://images.unsplash.com/photo-1608791952180-79294109d843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwZXJzb258ZW58MHx8MHx8fDA%3D',
    },
  ];

  const enhancedStyles = {
    testimonialsContainer: {
      margin: '20px',
      padding: '20px',
      background: 'linear-gradient(to right top, #3388ff, #66a3ff, #99bbff, #ccd9ff, #ffffff)', // Updated gradient
    },
    pageHeading: {
      fontSize: '35px',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: 'black',
    },
    testimonialsList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    testimonialItem: {
      width: '80%',
      border: '1px solid #ccc',
      borderRadius: '12px',
      margin: '20px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    },
    testimonialHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    testimonialRating: {
      fontSize: '20px',
      color: '#ffc107',
      marginRight: '5px',
    },
    testimonialName: {
      fontSize: '25px',
      fontWeight: 'bold',
    },
    testimonialLocation: {
      fontSize: '19px',
      color: 'black',
      fontWeight: 'bold',
    },
    testimonialContent: {
      fontSize: '20px',
      lineHeight: '1.5',
      fontWeight: 'bold',
      marginTop: '150px', // Adjusted margin
      textAlign: 'center',
    },
    testimonialImage: {
      width: '50%',
      height: '500px',
      borderRadius: '8px',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      <Navbar/>
    <div style={enhancedStyles.testimonialsContainer}>
     
      <h2 style={enhancedStyles.pageHeading}>Customer Testimonials</h2>
      <div style={enhancedStyles.testimonialsList}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} style={enhancedStyles.testimonialItem}>
            <div style={enhancedStyles.testimonialHeader}>
              <span style={enhancedStyles.testimonialRating}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </span>
              <span style={enhancedStyles.testimonialName}>{testimonial.name}</span>
              <span style={enhancedStyles.testimonialLocation}>{testimonial.location}</span>
            </div>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s photo`}
              style={enhancedStyles.testimonialImage}
            />
            <p style={enhancedStyles.testimonialContent}>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TestimonialsPage;
