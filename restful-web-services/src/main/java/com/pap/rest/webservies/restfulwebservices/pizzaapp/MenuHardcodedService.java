package com.pap.rest.webservies.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MenuHardcodedService {
	
	private static List<Product> menu = new ArrayList<>();
	private static int idCounter = 0;
	
	static {menu.add(new Product(++idCounter, "margharita", 10));
		menu.add(new Product(++idCounter, "pepperoni", 10));
		menu.add(new Product(++idCounter, "prosciutto", 10));
	}
	public List<Product> findAll(){
		return menu;
	}
}
