import React from 'react';
import '../style/destination.css';

export const Destination = () => {
    const destinations = [
        {
            name: "Paris",
            info: "The city of lights, known for its art, fashion, and the iconic Eiffel Tower.",
            image: "Images/traveller-2.jpg",
            alt: "Paris"
        },
        {
            name: "New York",
            info: "The city that never sleeps, famous for its skyline, Broadway shows, and cultural diversity.",
image: "Images/traveller-1.jpg",
            alt: "New York"
        },
        {
            name: "Tokyo",
            info: "A bustling metropolis blending traditional culture with cutting-edge technology.",
            image: "Images/traveller-3.jpg",
            alt: "Tokyo"
        },
{
            name: "Sydney",
            info: "Known for its stunning harbor, Opera House, and beautiful beaches.",
            image: "assets/traveller-4.jpg",
            alt: "Sydney"
        },
        {
            name: "Egypt",
info: "Home to ancient civilizations, pyramids, and the majestic Nile River.",
            image: "Images/Egypt.png",
            alt: "Egypt"
        },
        {
            name: "Singapore",
info: "A vibrant city-state known for its cleanliness, green spaces, and futuristic architecture.",
            image: "Images/singapor.jpeg",
            alt: "Singapore"
        },
        {
            name: "UAE",
info: "A land of luxury and innovation, famous for Dubai's skyscrapers and Abu Dhabi's cultural landmarks.",
            image: "Images/UAE.jpeg",
            alt: "UAE"
        },
        {
            name: "Switzerland",
            info: "Renowned for its picturesque landscapes, ski resorts, and delicious chocolate.",
            image: "Images/switzerland.jpeg",
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