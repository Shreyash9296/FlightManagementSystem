import React from 'react';
import '../style/destination.css';
import traveller2 from '../assets/traveller-2.jpg';
import traveller1 from '../assets/traveller-1.jpg';
import traveller3 from '../assets/traveller-3.jpg';
import traveller4 from '../assets/traveller-4.jpg';
import egypt from '../Images/Egypt.png';
import singapore from '../Images/singapor.jpeg';
import uae from '../Images/UAE.jpeg';
import switzerland from '../Images/switzerland.jpeg';

export const Destination = () => {
    const destinations = [
        {
            name: "Paris",
            info: "The city of lights, known for its art, fashion, and the iconic Eiffel Tower.",
            image: traveller2,
            alt: "Paris"
        },
        {
            name: "New York",
            info: "The city that never sleeps, famous for its skyline, Broadway shows, and cultural diversity.",
image: traveller1,
            alt: "New York"
        },
        {
            name: "Tokyo",
            info: "A bustling metropolis blending traditional culture with cutting-edge technology.",
            image: traveller3,
            alt: "Tokyo"
        },
{
            name: "Sydney",
            info: "Known for its stunning harbor, Opera House, and beautiful beaches.",
            image: traveller4,
            alt: "Sydney"
        },
        {
            name: "Egypt",
info: "Home to ancient civilizations, pyramids, and the majestic Nile River.",
            image: egypt,
            alt: "Egypt"
        },
        {
            name: "Singapore",
info: "A vibrant city-state known for its cleanliness, green spaces, and futuristic architecture.",
            image: singapore,
            alt: "Singapore"
        },
        {
            name: "UAE",
info: "A land of luxury and innovation, famous for Dubai's skyscrapers and Abu Dhabi's cultural landmarks.",
            image: uae,
            alt: "UAE"
        },
        {
            name: "Switzerland",
            info: "Renowned for its picturesque landscapes, ski resorts, and delicious chocolate.",
            image: switzerland,
            alt: "Switzerland"
        }
    ];

    return (
        <div className="destinations-container">
            <h1>Popular Destinations</h1>
<div className="destinations-grid">
                {destinations.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img src={destination.image} alt={destination.alt} />
                        <h2>{destination.name}</h2>
                        <p>{destination.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};