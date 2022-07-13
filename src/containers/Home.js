// Init
import React from 'react';

// Importing Components
import Header from '../components/Header';
import MainCalender from '../components/CustomCalender/MainCalender';

// Home Component
export default function Home() {
  return (
    <div className="main">
      <Header />
      <MainCalender />
    </div>
  );
}
