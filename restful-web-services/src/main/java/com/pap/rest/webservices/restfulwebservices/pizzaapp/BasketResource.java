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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasketResource {
	
	@Autowired
	private BasketHardcodedService basketService;	
	
	@GetMapping("/user/{username}/basket")
	public List<BasketProduct> getBasket(@PathVariable String username){
		return basketService.findBasket();
	}
	
	//DELETE
	@DeleteMapping("/user/{username}/basket/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable String username, @PathVariable long id){
		
		BasketProduct product = basketService.deleteById(id);
		if(product!=null)
		{
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	@GetMapping("/user/{username}/basket/{id}")
	public BasketProduct getBasket(String username, @PathVariable long id){
		return basketService.findById(id);
	}
	
	@PostMapping("/user/{username}/basket")
	public ResponseEntity<Void> addToBasket(
			@PathVariable String username, @RequestBody Product product) throws URISyntaxException{
		BasketProduct newBasket = basketService.addNew(product);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newBasket.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
}
