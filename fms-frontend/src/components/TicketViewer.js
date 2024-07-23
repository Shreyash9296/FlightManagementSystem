import React, { useState } from 'react';
import axios from 'axios';
import '../style/ticketViewer.css';

const TicketViewer = () => {
    const [bookingId, setBookingId] = useState('');
    const [ticketDetails, setTicketDetails] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [pin, setPin] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleViewTicket = async () => {
        try {
            const bookingResponse = await axios.get(`http://localhost:8080/bookings/${bookingId}`);
            const booking = bookingResponse.data;

            const flightId = booking.flight.id;
            const flightResponse = await axios.get(`http://localhost:8080/flights/${flightId}`);
            const flight = flightResponse.data;

            setTicketDetails({ ...booking, flight });
            setPaymentSuccess(false); // Reset payment status
        } catch (error) {
            console.error('Error fetching ticket details:', error);
        }
    };

    const handlePayment = () => {
        if (paymentMethod === 'upi') {
            if (upiId === '8421825085@ybl' && pin === '9296') {
                setPaymentSuccess(true);
            } else {
                setPaymentSuccess(false);
                alert('Invalid UPI ID or PIN');
            }
        } else if (paymentMethod === 'debit') {
            if (pin === '9296') {
                setPaymentSuccess(true);
            } else {
                setPaymentSuccess(false);
                alert('Invalid PIN');
            }
        }
    };

    return (
        <div className="ticket-viewer-container">
            <h2>View Your Ticket Here</h2>
            <button onClick={() => document.getElementById('ticketInput').style.display = 'block'}>
                View Ticket
            </button>

            <div id="ticketInput" style={{ display: 'none' }}>
                <input
                    type="text"
                    placeholder="Enter Booking ID"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                />
                <button onClick={handleViewTicket}>Fetch Ticket</button>
            </div>

            {ticketDetails && (
                <div className="ticket-details">
                    <h3>Ticket Details</h3>
                    <p>Passenger Name: {ticketDetails.passengerName}</p>
                    <p>Contact Number: {ticketDetails.contactNumber}</p>
                    <p>Email: {ticketDetails.email}</p>
                    <h4>Flight Info</h4>
                    <p>Departure City: {ticketDetails.flight.departureCity}</p>
                    <p>Arrival City: {ticketDetails.flight.arrivalCity}</p>
                    <p>Flight Date: {ticketDetails.flight.flightDate}</p>
                    <p>Price: ${ticketDetails.flight.price}</p>

                    <div className="payment-method">
                        <label>
                            <input
                                type="radio"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={() => setPaymentMethod('upi')}
                            />
                            UPI
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="debit"
                                checked={paymentMethod === 'debit'}
                                onChange={() => setPaymentMethod('debit')}
                            />
                            Debit Card
                        </label>
                    </div>

                    {paymentMethod === 'upi' && (
                        <div className="upi-details">
                            <input
                                type="text"
                                placeholder="Enter UPI ID"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Enter PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                            />
                        </div>
                    )}

                    {paymentMethod === 'debit' && (
                        <div className="debit-details">
                            <input
                                type="password"
                                placeholder="Enter PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                            />
                        </div>
                    )}

                    <button onClick={handlePayment}>Proceed to Payment</button>

                    {paymentSuccess && (
                        <div className="payment-success">
                            <p>Payment Successful!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TicketViewer;
