package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BasketHardcodedService {
	
	private static List<BasketProduct> basket = new ArrayList<>();
	private static int idCounter = 0;
	
	static {basket.add(new BasketProduct(++idCounter, "margharita", 10, "admin", 2));
	basket.add(new BasketProduct(++idCounter, "pepperoni", 10, "admin", 3));
	//basket.add(new BasketProduct(++idCounter, "prosciutto", 10,"admin", 1));
	}
	
	public List<BasketProduct> findBasket(){
		return basket;
	}
	
	public BasketProduct deleteById(long id) {
		BasketProduct basketproduct = findById(id);
		
		if(basketproduct==null) return null;
		
		
		if(basket.remove(basketproduct)) {
		return basketproduct;	
		}
		return null;
	}

	public BasketProduct findById(long id) {
		for(BasketProduct basketproduct:basket)
		{
			if(basketproduct.getId()==id)
				return basketproduct;
		}
		return null;
	}
	
	public BasketProduct addNew(Product product) {
		BasketProduct newBasket = findById(product.getId());
		if (newBasket==null) {
			BasketProduct basketproduct = new BasketProduct(product.getId(), product.getName(), 10, "admin", 1);
			basket.add(basketproduct);
			return basketproduct;
		}
		else {
			newBasket.setQuantity(newBasket.getQuantity()+1);
			deleteById(newBasket.getId());
			basket.add(newBasket);
			return newBasket;
		}
		}
}
	
	

