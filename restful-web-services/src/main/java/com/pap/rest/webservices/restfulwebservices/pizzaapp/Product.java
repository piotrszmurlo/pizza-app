package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue
	public Long id;
	public String name;
	private int price;
	private String img_src;
	
	protected Product() {
	}
	public String getImg_src() {
		return img_src;
	}

	public void setImg_src(String img_src) {
		this.img_src = img_src;
	}

	public Product(Long id, String name, int price, String img_src) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.img_src = img_src;
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
	
	@Override
	public boolean equals(Object obj) {
		if(this==obj)
			return true;
		if(obj == null)
			return false;
		if(getClass()!=obj.getClass())
			return false;
		Product other = (Product) obj;
		if(id != other.id)
			return false;
		return true;
	}
}
