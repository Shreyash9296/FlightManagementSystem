import React from 'react';
import '../style/ProjectStyle.css';
import traveller1 from '../assets/traveller-1.jpg';
import traveller2 from '../assets/traveller-2.jpg';
import traveller3 from '../assets/traveller-3.jpg';
import traveller4 from '../assets/traveller-4.jpg';

const Travelers = () => (
  <><link rel='stylesheet' href='../style/ProjectStyle.css'></link><section className="section__container travellers__container">
    <h2 className="section__header">Best travel places to visit</h2>
    <div className="travellers__grid">
      <div className="travellers__card">
        <img src={traveller1} alt="travel place" />
        <div className="travellers__card__content">
          <h4>Paris, France</h4>
          <p>The City of Love and Romance</p>
        </div>
      </div>
      <div className="travellers__card">
<<<<<<< HEAD
        <img src="C:\Users\shrey\Music\clone3\FlightManagementSystem\fms-frontend\src\assets\paris.jpg" alt="travel place" />
=======
        <img src={traveller2} alt="travel place" />
>>>>>>> 5967871b42d8917b3de8b579d81e1bd1ed8be5f9
        <div className="travellers__card__content">
          <h4>New York City, USA</h4>
          <p>The City That Never Sleeps</p>
        </div>
      </div>
      <div className="travellers__card">
        <img src={traveller3} alt="travel place" />
        <div className="travellers__card__content">
          <h4>Tokyo, Japan</h4>
          <p>The City of Neon Lights and Technology</p>
        </div>
      </div>
      <div className="travellers__card">
        <img src={traveller4} alt="travel place" />
        <div className="travellers__card__content">
          <h4>Sydney, Australia</h4>
          <p>The City of Iconic Landmarks and Beaches</p>
        </div>
      </div>
    </div>
  </section></>
);

export default Travelers;
