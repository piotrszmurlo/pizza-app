package com.pap.rest.webservies.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BasketHardcodedService {
	
	private static List<BasketProduct> basket = new ArrayList<>();
	private static int idCounter = 0;
	
	static {basket.add(new BasketProduct(++idCounter, "margharita", 10, "./images/margharita.png", "admin", 2));
	basket.add(new BasketProduct(++idCounter, "pepssperoni", 10, "./images/pepperoni.png", "admin", 3));
	basket.add(new BasketProduct(++idCounter, "prosciutto", 10, "./images/prosciutto.png", "admin", 1));}
	
	public List<BasketProduct> findBasket(){
		return basket;
	}
}
