package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MenuHardcodedService {
	
	private static List<Product> menu = new ArrayList<>();
	private static int idCounter = 0;
	
	static {menu.add(new Product(++idCounter, "margharita", 10, "./images/margharita.png"));
		menu.add(new Product(++idCounter, "pepperoni", 10, "./images/pepperoni.png"));
		menu.add(new Product(++idCounter, "prosciutto", 10, "./images/prosciutto.png"));
	}
	public List<Product> findAll(){
		return menu;
	}
}
