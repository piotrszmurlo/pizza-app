package com.pap.rest.webservices.restfulwebservices.pizzaapp;



import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pap.rest.webservices.restfulwebservices.jwt.JwtUserDetails;

@Entity
public class ProductsOrder {

	@Id
	@GeneratedValue
	@Column(name="ORDER_ID")
	private Long id;
	@OneToMany(mappedBy = "productsOrder")
	@JsonIgnoreProperties("productsOrder")
	private Set<SoldProduct> products;
	private boolean isCompleted;
	public Long getId() {
		return id;
	}

	public ProductsOrder(Long id, Set<SoldProduct> products, boolean isCompleted, String orderDate, JwtUserDetails user) {
		super();
		this.id = id;
		this.products = products;
		this.isCompleted = isCompleted;
		this.orderDate = orderDate;
		this.user = user;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<SoldProduct> getProducts() {
		return products;
	}

	public void setProducts(Set<SoldProduct> products) {
		this.products = products;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

//	@JsonIgnore
	public JwtUserDetails getUser() {
		return user;
	}

	public void setUser(JwtUserDetails user) {
		this.user = user;
	}


	private String orderDate;
	@ManyToOne(targetEntity = com.pap.rest.webservices.restfulwebservices.jwt.JwtUserDetails.class)
	@JoinColumn(name="USER_ID", nullable = false)
	
	private JwtUserDetails user;
	
	protected ProductsOrder() {
	}
	
	
}
