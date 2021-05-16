package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.pap.rest.webservices.restfulwebservices.pizzaapp.MenuHardcodedService;

@RestController
@CrossOrigin
public class MenuResource {
	
	@Autowired
	private MenuHardcodedService menuService;
		
	@Autowired
	private BasketHardcodedService basketService;
	
	@GetMapping("/menu")
	public List<Product> getMenu(String username){
		return menuService.findAll();
	}
	
	@GetMapping("/menu/{id}")
	public Product getMenu(@PathVariable long id){
		return menuService.findById(id);
	}
	
	
	
	
	/*
	 * @PutMapping("/menu")
	public ResponseEntity<BasketProduct> updateBasket(@RequestBody BasketProduct product){
		BasketProduct newBasket = basketService.add(product);
		return new ResponseEntity<BasketProduct>(product, HttpStatus.OK);
		
	}
	*/
	
	 
	
}
