package com.pap.rest.webservies.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BasketHardcodedService {
	
	private static List<Product> basket = new ArrayList<>();
	private static int idCounter = 0;
	
	static {basket.add(new Product(++idCounter, "margharita", 10, "./images/margharita.png"));
	basket.add(new Product(++idCounter, "pepssperoni", 10, "./images/pepperoni.png"));
	basket.add(new Product(++idCounter, "prosciutto", 10, "./images/prosciutto.png"));}
	
	public List<Product> findBasket(){
		return basket;
	}
}
