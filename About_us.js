import React from "react";
import Navbar from "./Navbar";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="about">ABOUT US
        <p>Welcome to Tourist</p>
      </div>
      <div className="image_container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYryVPtyyvrojY7kgN6Be8d5Biw4c7bK7SA&usqp=CAU" />
        <div className="no_point">
          <div className="aligned-list">
            <p>
              we're your gateway to seamless travel experiences. We're committed to revolutionizing the way you explore the world, offering a diverse range of services and a user-friendly interface designed with your needs in mind.
            </p>
            <p>
              Our journey began with a vision to simplify travel planning, catering to every traveler's aspirations. Our commitment extends beyond booking; it encompasses crafting memorable experiences that ignite your wanderlust. We prioritize user-centricity, ensuring every click on our site is a step closer to your dream getaway.
            </p>
            <div>First Class Flights</div>
            <div>5 Star Accommodations</div>
            <div>150 Premium City Tours</div>
            <div>Secure and Reliable Booking</div>
            <div>Customer Satisfaction</div>
            <div>Exclusive Deals and Packages</div>
            <div>Travel Guides and Resources</div>
            <div>Social Media Integration</div>
            <div>24/7 Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

