package com.pap.rest.webservices.restfulwebservices.jwt;

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

import com.pap.rest.webservices.restfulwebservices.pizzaapp.BasketJpaRepository;
import com.pap.rest.webservices.restfulwebservices.pizzaapp.MenuHardcodedService;
import com.pap.rest.webservices.restfulwebservices.pizzaapp.MenuJpaRepository;
import com.pap.rest.webservices.restfulwebservices.pizzaapp.Product;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JwtUserDetailsJpaResource {
	
	@Autowired
	private JwtUserDetailsJpaRepository jwtUserDetailsJpaRepository;
	
	@GetMapping("/jpa/user")
	public List<JwtUserDetails> getAllUsers(String username){
		return jwtUserDetailsJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/user/{id}")
	public JwtUserDetails getUser(String username, @PathVariable long id){
		return jwtUserDetailsJpaRepository.findById(id).get();
//		return jwtUserDetailsJpaRepository.findByUsername("in28minutes");
	}
	
	
	
	
	/*
	 * @PutMapping("/menu")
	public ResponseEntity<BasketProduct> updateBasket(@RequestBody BasketProduct product){
		BasketProduct newBasket = basketService.add(product);
		return new ResponseEntity<BasketProduct>(product, HttpStatus.OK);
		
	}
	*/
	
	 
	
}
