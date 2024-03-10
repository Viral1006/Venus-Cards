import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const AboutUs = () => {
  // Define your company's address and location
  const companyAddress = 'Your Company Address';
  const companyLocation = { lat: 37.7749, lng: -122.4194 }; // Example coordinates for San Francisco

  // Google Maps API key (replace with your own key)
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  return (
    <div>
      <h1>About Us</h1>
      <p>{companyAddress}</p>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={companyLocation}
          zoom={15}
        >
          <Marker position={companyLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default AboutUs;
