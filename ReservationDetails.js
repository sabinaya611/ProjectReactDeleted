
import React, { useState } from 'react';
import Navbar from './Navbar';
const FlightReservationForm = () => {
  <Navbar/>
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
    returnDate: '',
    passengerCount: 1,
    cabinClass: 'economy',
    specialRequests: '',
    address: {
      streetAddress: '',
      streetAddressLine2: '',
      city: '',
      stateProvince: '',
      postalZipCode: '',
      country: '',
    },
    airline: '',
    fare: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flight-reservation-form">
      <h2 className='flight'>Flight Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Departure City</label>
          <input type="text" name="departureCity" value={formData.departureCity} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Destination City</label>
          <input type="text" name="destinationCity" value={formData.destinationCity} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Return Date</label>
          <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Passenger Count</label>
          <input type="number" name="passengerCount" value={formData.passengerCount} onChange={handleChange} min="1" required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="streetAddress" placeholder="Street Address" value={formData.address.streetAddress} onChange={handleAddressChange} required />
          <input type="text" name="streetAddressLine2" placeholder="Street Address Line 2" value={formData.address.streetAddressLine2} onChange={handleAddressChange} />
          <input type="text" name="city" placeholder="City" value={formData.address.city} onChange={handleAddressChange} required />
          <input type="text" name="stateProvince" placeholder="State/Province" value={formData.address.stateProvince} onChange={handleAddressChange} />
          <input type="text" name="postalZipCode" placeholder="Postal/Zip Code" value={formData.address.postalZipCode} onChange={handleAddressChange} />
          <input type="text" name="country" placeholder="Country" value={formData.address.country} onChange={handleAddressChange} required />
        </div>

        <div className="form-group">
          <label>Airline</label>
          <input type="text" name="airline" placeholder="Airline" value={formData.airline} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Fare</label>
          <input type="text" name="fare" placeholder="Fare" value={formData.fare} onChange={handleChange} required />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* CSS styles */}
      <style jsx>{`
        .flight-reservation-form {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .form-group {
          margin-bottom: 20px;
          width: 700px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #555;
        }

        input,
        select,
        textarea {
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        textarea {
          resize: vertical;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default FlightReservationForm;
