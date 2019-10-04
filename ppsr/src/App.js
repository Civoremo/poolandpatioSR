import React from 'react';
import './App.css';

import Navigation from './components/navbar';
import ServicesPage from './components/services';
import AboutUs from './components/aboutus';

function App() {
  return (
    <div style={{height: '2000px'}}>
      <Navigation />
      <div className='callToActionSpacer' />
      <ServicesPage />
      <AboutUs />
    </div>
  );
}

export default App;
