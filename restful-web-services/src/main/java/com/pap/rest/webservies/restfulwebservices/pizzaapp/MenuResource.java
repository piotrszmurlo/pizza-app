package com.pap.rest.webservies.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pap.rest.webservies.restfulwebservices.pizzaapp.MenuHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MenuResource {
	
	@Autowired
	private MenuHardcodedService menuService;
	
	@GetMapping("/menu")
	public List<Product> getMenu(String username){
		return menuService.findAll();
	}

}
