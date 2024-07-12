import React from 'react';
import './ProjectStyle.css';

const Travelers = () => (
  <><link rel='stylesheet' href='./ProjectStyle.css'></link><section className="section__container travellers__container">
    <h2 className="section__header">Best travel places to visit</h2>
    <div className="travellers__grid">
      <div className="travellers__card">
        <img src="/assets/traveller-1.jpg" alt="travel place" />
        <div className="travellers__card__content">
          <h4>Paris, France</h4>
          <p>The City of Love and Romance</p>
        </div>
      </div>
      <div className="travellers__card">
        <img src="/assets/traveller-2.jpg" alt="travel place" />
        <div className="travellers__card__content">
          <h4>New York City, USA</h4>
          <p>The City That Never Sleeps</p>
        </div>
      </div>
      <div className="travellers__card">
        <img src="assets/traveller-3.jpg" alt="travel place" />
        <div className="travellers__card__content">
          <h4>Tokyo, Japan</h4>
          <p>The City of Neon Lights and Technology</p>
        </div>
      </div>
      <div className="travellers__card">
        <img src="/assets/traveller-4.jpg" alt="travel place" />
        <div className="travellers__card__content">
          <h4>Sydney, Australia</h4>
          <p>The City of Iconic Landmarks and Beaches</p>
        </div>
      </div>
    </div>
  </section></>
);

export default Travelers;
