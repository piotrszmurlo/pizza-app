package com.pap.rest.webservies.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasketResource {
	
	@Autowired
	private BasketHardcodedService basketService;	
	
	@GetMapping("/user/{username}/basket")
	public List<BasketProduct> getBasket(@PathVariable String username){
		return basketService.findBasket();
		
	}
}
