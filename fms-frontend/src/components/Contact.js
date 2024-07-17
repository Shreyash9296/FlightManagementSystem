import React, { useState } from 'react';
import '../style/contact.css'
export function Contact() {const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Example: sendFormToServer(name, email, message);
    setSuccess(true); // Assuming success for demonstration
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter your message"
          />
        </label>
        <br />
        <button type="submit">Send Message</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Message sent successfully!</div>}
      </form>
    </div>
  );
}
