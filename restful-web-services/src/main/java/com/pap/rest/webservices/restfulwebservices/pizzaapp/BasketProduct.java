package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BasketProduct {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private int price;
	private String username;
	private int quantity;

	protected BasketProduct() {
	}

	public BasketProduct(Long id, String name, int price, String username, int quantity) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.username = username;
		this.quantity = quantity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BasketProduct other = (BasketProduct) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
