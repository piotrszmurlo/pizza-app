package com.pap.rest.webservies.restfulwebservices.pizzaapp;

public class BasketProduct extends Product{
	private String username;
	private int quantity;
	
	public BasketProduct(long id, String name, int price, String img_src, String username, int quantity) {
		super(id, name, price, img_src);
		this.quantity = quantity;
		this.username = username;
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
}
