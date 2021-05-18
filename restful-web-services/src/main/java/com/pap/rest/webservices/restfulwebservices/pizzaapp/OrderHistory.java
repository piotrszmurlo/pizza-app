package com.pap.rest.webservices.restfulwebservices.pizzaapp;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class OrderHistory {

	@Id
	@GeneratedValue
	private long id;
	private String username;
	private String products;
	private int total;
	
	public OrderHistory(long id, String username, String products, int total) {
		super();
		this.id = id;
		this.username = username;
		this.products= products;
		this.total = total;
	}
}
