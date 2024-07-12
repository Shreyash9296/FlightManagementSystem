import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

import Travelers from './components/Travelers';
import Footer from './components/Footer';
import './components/ProjectStyle.css';

const App = () => (
  <div className="App">
    <Nav />
    <Header />
    <BookingForm />
    <Travelers />
    <Footer />
  </div>
);

export default App;
