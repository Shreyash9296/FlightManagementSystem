import React, { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
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
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>Message sent successfully!</div>}
      </form>
    </div>
  );
}

