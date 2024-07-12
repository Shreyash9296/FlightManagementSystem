package com.spring.model;

import javax.persistence.*;

@Entity
@Table
public class Booking {

    @Id
    @Column
    private int id;
    private String passengerName;
    private String contactNumber;
    private String email;
    @ManyToOne
    @JoinColumn(name = "flight_id", insertable = false, updatable = false)
    private Flight flight;

    @GeneratedValue(strategy = GenerationType.AUTO)

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public Flight getFlight() {
        return flight;
    }
//
    public void setFlight(Flight flight) {
        this.flight = flight;
    }
}