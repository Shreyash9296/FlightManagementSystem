import React from 'react'
// import { Home } from './Home';
import { LoginPage } from './Login';
import {BrowserRouter as Router,Link,Routes, Route} from 'react-router-dom'
// import { Profile } from './Profile';
import {About} from './About';
import {Contact} from './Contact';
import {Destination} from './Destination';
import {Seats} from './Seats';
import {Registration} from './Registration';
import { Home } from './Home';
export const Nav = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/Destination">Destination</Link>
            <Link to="/Seat">Find Seats</Link>
            <Link to="/Login">Login</Link>
</nav>
        <Routes>
      {/* <Route exact path='/' Component={Home} /> */}
      <Route path='/About' Component={About} />
      <Route path='/Contact' Component={Contact} />
      <Route path='/Destination' Component={Destination} />
      <Route path='/Seats' Component={Seats} />
      <Route path='/Login' Component={LoginPage} />
      <Route path='/Registration' Component={Registration} />

      </Routes>
      
    </div>
  )
}
