import React from 'react';
import {Nav} from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import { Home } from './components/Home';
import Travelers from './components/Travelers';
import Footer from './components/Footer';
import './style/ProjectStyle.css';
import cors from 'react';

const App = () => (
  <div className="App">
    <Nav/>
        <Header/>
        <BookingForm/>
        <Travelers/>
        <Footer/>
  </div>
);

export default App;
