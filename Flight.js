// FlightPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = Array.from({ length: 100 }, (_, index) => 2023 - index);
function FlightPage() {
  const [formData, setFormData] = useState({
    passengerName: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
    dateOfBirth: {
      month: '',
      day: '',
      year: '',
    },
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleInputFocus = () => {
    setShowCalendar(true);
  };

  const handleInputBlur = () => {
    setShowCalendar(false);
  };

  const handleNextClick = () => {
    // Validate the form data before navigating
    // For simplicity, let's assume it's always valid for now
    // Use the Link component to navigate to Reservation Details
  };

  const flightPageStyles = {
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
    maxHeight: '300px', // Adjust as needed
  };

  const pageContentStyles = {
    margin: '20px',
  };

  const headingStyles = {
    marginBottom: '10px',
  };

  const blueTextStyles = {
    color: 'blue',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const formGroupStyles = {
    marginBottom: '20px',
    width: '100%',
  };

  const flexRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const inputStyles = {
    width: '30%',
    padding: '10px',
    marginBottom: '10px',
  };

  const calendarStyles = {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    display: showCalendar ? 'block' : 'none',
  };

  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (

  <div>
  <Navbar/>
    <div style={flightPageStyles}>
      <img src="https://www.jotform.com/uploads/ugurg/form_files/plane5.6388d94a038716.80328162.png" alt="Flight" style={imageStyles} />

      <div style={pageContentStyles}>
        <h2 style={headingStyles}>Flight Reservation</h2>
        <p style={blueTextStyles}>
          Please make sure that you fill in the name as it appears in your passport.
        </p>

        <form style={formStyles}>
          <div style={formGroupStyles}>
            <h3>Passenger Name</h3>
            <div style={flexRowStyles}>
              <input
                type="text"
                placeholder="First Name"
                value={formData.passengerName.firstName}
                onChange={(e) =>
                  handleInputChange('passengerName', {
                    ...formData.passengerName,
                    firstName: e.target.value,
                  })
                }
                style={inputStyles}
              />
              <input
                type="text"
                placeholder="Middle Name"
                value={formData.passengerName.middleName}
                onChange={(e) =>
                  handleInputChange('passengerName', {
                    ...formData.passengerName,
                    middleName: e.target.value,
                  })
                }
                style={inputStyles}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.passengerName.lastName}
                onChange={(e) =>
                  handleInputChange('passengerName', {
                    ...formData.passengerName,
                    lastName: e.target.value,
                  })
                }
                style={inputStyles}
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <h3>Date of Birth</h3>
            <div style={flexRowStyles}>
              <select
                value={formData.dateOfBirth.month}
                onChange={(e) =>
                  handleInputChange('dateOfBirth', {
                    ...formData.dateOfBirth,
                    month: e.target.value,
                  })
                }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={inputStyles}
              >
                <option value="">Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={formData.dateOfBirth.day}
                onChange={(e) =>
                  handleInputChange('dateOfBirth', {
                    ...formData.dateOfBirth,
                    day: e.target.value,
                  })
                }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={inputStyles}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                value={formData.dateOfBirth.year}
                onChange={(e) =>
                  handleInputChange('dateOfBirth', {
                    ...formData.dateOfBirth,
                    year: e.target.value,
                  })
                }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={inputStyles}
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div style={calendarStyles}>
              {/* You can render your calendar component here */}
              Calendar goes here
            </div>
          </div>

          <Link to="/reservationdetails">
            <button type="button" onClick={handleNextClick} style={buttonStyles}>
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

export default FlightPage;
