package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProductsOrderJpaResource {
	
	@Autowired
	private ProductsOrderJpaRepository productsOrderRepository;
	
	@GetMapping("/jpa/user/{username}/order")
	public List<ProductsOrder> getBasket(@PathVariable String username){
		return productsOrderRepository.findAll();
		
	}
}
