package com.spring.model;

import javax.persistence.*;
import java.time.localDateTime;

@Entity
@Table(name="bookings")
public class Booking{
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public string getFlightnumber() {
        return flightnumber;
    }

    public void setFlightnumber(string flightnumber) {
        this.flightnumber = flightnumber;
    }

    public string getDeparture() {
        return departure;
    }

    public void setDeparture(string departure) {
        this.departure = departure;
    }

    public string getDestination() {
        return destination;
    }

    public void setDestination(string destination) {
        this.destination = destination;
    }

    public LocalDateTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalDateTime departureTime) {
        this.departureTime = departureTime;
    }

    public LocalDateTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalDateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public string getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(string passengerName) {
        this.passengerName = passengerName;
    }

    public string getPassengerEmail() {
        return passengerEmail;
    }

    public void setPassengerEmail(string passengerEmail) {
        this.passengerEmail = passengerEmail;
    }

    @Id
    @GeneratedValue(strategy = GeneratedValueType.IDENTITY)
    private Long id;
    private string flightnumber;
    private string departure;
    private string destination;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private string passengerName;
    private string passengerEmail;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    private double price;


}