import React from 'react';
import '../style/about.css';

export const About = () => {
    return (
        <div className="container">
            <section id="overview">
                <h1>Welcome to MY FLIGHT</h1>
                <p>MY FLIGHT is your go-to Flight Management System, designed to streamline your flight operations and enhance your travel experience.</p>
            </section>
            <section id="about">
                <h2>About MY FLIGHT</h2>
<p>MY FLIGHT is an advanced Flight Management System created to offer a seamless and efficient way to manage your flight operations. Whether you're an airline operator or a frequent flyer, our system provides you with all the necessary tools to ensure a smooth and hassle-free flight experience.</p>
            </section>
            <section id="benefits" className="benefits">
                <h2>Benefits</h2>
                <ul>
<li><strong>Operational Efficiency:</strong> Streamlined access to flight schedules helps airline staff manage operations more effectively, ensuring flights are coordinated and delays are minimized.</li>
                    <li><strong>Enhanced Customer Service:</strong> Providing accurate and up-to-date flight information improves passenger experience by keeping them informed and reducing uncertainty.</li>
                    <li><strong>Data-Driven Decision Making:</strong> Access to detailed
flight data supports data-driven decision-making processes, helping airlines optimize routes, manage resources, and improve overall performance.</li>
                </ul>
            </section>
        </div>
    );
};
