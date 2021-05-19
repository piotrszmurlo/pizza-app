package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MenuJpaResource {

	@Autowired
	private MenuJpaRepository menuJpaRepository;

	@GetMapping("/jpa/menu")
	public List<Product> getMenu(String username) {
		return menuJpaRepository.findAll();
	}

	@GetMapping("/jpa/menu/{id}")
	public Product getMenu(String username, @PathVariable long id) {
		return menuJpaRepository.findById(id).get();
	}
}
