package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SoldProductJpaResource {
	
	@Autowired
	private SoldProductJpaRepository soldProductJpaRepository;	
	
	@GetMapping("/jpa/user/{username}/sales")
	public List<SoldProduct> getBasket(@PathVariable String username){
		return soldProductJpaRepository.findByUsername(username);
		
	}
	//DELETE
	@DeleteMapping("/jpa/user/{username}/sale/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable String username, @PathVariable long id){
		 soldProductJpaRepository.deleteById(id);
		 return ResponseEntity.noContent().build();

	}
	@GetMapping("/jpa/user/{username}/sale/{id}")
	public SoldProduct getBasket(String username, @PathVariable long id){
		return soldProductJpaRepository.findById(id).get();
	}
	
	@PostMapping("/jpa/user/{username}/sale")
	public ResponseEntity<Void> addToBasket(@PathVariable String username, @RequestBody SoldProduct soldProduct) throws URISyntaxException{
//		SoldProduct soldProduct = new SoldProduct();
//		soldProduct.setName(soldProduct.getName());
//		soldProduct.setPrice(soldProduct.getPrice());
//		soldProduct.setQuantity(soldProduct.getQuantity());
//		soldProduct.setUsername(username);
		SoldProduct newSoldProduct = soldProductJpaRepository.save(soldProduct);
//		newSoldProduct.setUsername(username);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newSoldProduct.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}	
	
}
