package com.pap.rest.webservices.restfulwebservices.pizzaapp;


public class BasketProduct extends Product{
	private String username;
	private int quantity;
	
	public BasketProduct(long id, String name, int price, String username, int quantity) {
		super(id, name, price);
		this.quantity = quantity;
		this.username = username;
	}
	protected BasketProduct(){
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
		if(this==obj)
			return true;
		if(obj == null)
			return false;
		if(getClass()!=obj.getClass())
			return false;
		BasketProduct other = (BasketProduct) obj;
		if(id != other.id)
			return false;
		return true;
	}
}
