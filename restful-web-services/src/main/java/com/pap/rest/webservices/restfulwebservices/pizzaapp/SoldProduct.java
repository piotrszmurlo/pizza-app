package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class SoldProduct {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private int price;
	private String username;
	private int quantity;
	@ManyToOne
	@JoinColumn(name = "ORDER_ID", nullable = false)
	private ProductsOrder productsOrder;

	protected SoldProduct() {
	}

	public SoldProduct(Long id, String name, int price, String username, int quantity, ProductsOrder productsOrder) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.username = username;
		this.quantity = quantity;
		this.productsOrder = productsOrder;
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
		SoldProduct other = (SoldProduct) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public ProductsOrder getProductsOrder() {
		return productsOrder;
	}

	public void setProductsOrder(ProductsOrder productsOrder) {
		this.productsOrder = productsOrder;
	}
}
