package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BasketHardcodedService {
	
	private static List<BasketProduct> basket = new ArrayList<>();
	private static int idCounter = 0;
	
	static {basket.add(new BasketProduct(++idCounter, "margharita", 10, "./images/margharita.png", "admin", 2));
	basket.add(new BasketProduct(++idCounter, "pepssperoni", 10, "./images/pepperoni.png", "admin", 3));
	basket.add(new BasketProduct(++idCounter, "prosciutto", 10, "./images/prosciutto.png", "admin", 1));
	}
	
	public List<BasketProduct> findBasket(){
		return basket;
	}
	
	public BasketProduct deleteById(long id) {
		BasketProduct basketproduct = findyById(id);
		
		if(basketproduct==null) return null;
		
		
		if(basket.remove(basketproduct)) {
		return basketproduct;	
		}
		return null;
	}

	public BasketProduct findyById(long id) {
		for(BasketProduct basketproduct:basket)
		{
			if(basketproduct.getId()==id)
				return basketproduct;
		}
		return null;
	}
	
	
}
