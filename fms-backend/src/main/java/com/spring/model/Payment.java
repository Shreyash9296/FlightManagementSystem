package com.spring.model.Payment;

@Entity
@Table(name ="payments")
public class Payment {
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public string getMethod() {
        return method;
    }

    public void setMethod(string method) {
        this.method = method;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private long id;
    private double amount ;
    private string method;

    @ManyToOne
    @JoinColumn(name="booking_id",nullable = false)
    private Booking booking;
}