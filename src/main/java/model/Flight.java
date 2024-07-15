package model;

import javax.persistence.*;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@Table(name="Flight")
public class Flight {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	private String flightNumber;
	private String departureCity;
	private String arrivalCity;
	private Date departureDate;
	private Date arrivalDate;
	private int capacity;
	private int availableSeats;
	private BigDecimal flightprice;
	
	
	
	public int getId() {
		return id;
	}
	public String getFlightNumber() {
		return flightNumber;
	}
	public String getDepartureCity() {
		return departureCity;
	}
	public String getArrivalCity() {
		return arrivalCity;
	}
	public Date getDepartureDate() {
		return departureDate;
	}
	public Date getArrivalDate() {
		return arrivalDate;
	}
	public int getCapacity() {
		return capacity;
	}
	public int getAvailableSeats() {
		return availableSeats;
	}
	public BigDecimal getFlightprice() {
		return flightprice;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}
	public void setDepartureCity(String departureCity) {
		this.departureCity = departureCity;
	}
	public void setArrivalCity(String arrivalCity) {
		this.arrivalCity = arrivalCity;
	}
	public void setDepartureDate(Date departureDate) {
		this.departureDate = departureDate;
	}
	public void setArrivalDate(Date arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}
	public void setFlightprice(BigDecimal flightprice) {
		this.flightprice = flightprice;
	}
	
	

}
