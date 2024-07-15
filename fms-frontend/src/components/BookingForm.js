import React, { useState } from 'react';
import '../style/ProjectStyle.css';

const BookingForm = () => {
  const [location, setLocation] = useState('');
  const [travellers, setTravellers] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Location: ${location}\nTravellers: ${travellers}\nDeparture: ${departure}\nReturn: ${returnDate}`);
  };

  return (
    <section className="section__container booking__container">
      <div className="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <span><i className="ri-map-pin-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-user-3-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="number" value={travellers} onChange={(e) => setTravellers(e.target.value)} />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-calendar-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div className="form__group">
          <span><i className="ri-calendar-line"></i></span>
          <div className="input__content">
            <div className="input__group">
              <input type="text" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button className="btn"><i className="ri-search-line"></i>search</button>
      </form>
    </section>
  );
};

export default BookingForm;
