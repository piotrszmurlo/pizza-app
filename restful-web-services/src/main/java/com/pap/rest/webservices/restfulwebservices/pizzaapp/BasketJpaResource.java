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
@CrossOrigin(origins = "http://localhost:4200")
public class BasketJpaResource {

	@Autowired
	private BasketJpaRepository basketJpaRepository;

	@GetMapping("/jpa/user/{username}/basket")
	public List<BasketProduct> getBasket(@PathVariable String username) {
		return basketJpaRepository.findByUsername(username);

	}

	@DeleteMapping("/jpa/user/{username}/basket/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable String username, @PathVariable long id) {
		basketJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();

	}

	@GetMapping("/jpa/user/{username}/basket/{id}")
	public BasketProduct getBasket(String username, @PathVariable long id) {
		return basketJpaRepository.findById(id).get();
	}

	@PostMapping("/jpa/user/{username}/basket")
	public ResponseEntity<Void> addToBasket(@PathVariable String username, @RequestBody BasketProduct product)
			throws URISyntaxException {
		BasketProduct basketProduct = new BasketProduct();
		basketProduct.setName(product.getName());
		basketProduct.setPrice(product.getPrice());
		basketProduct.setQuantity(product.getQuantity());
		basketProduct.setUsername(username);
		BasketProduct newBasketProduct = basketJpaRepository.save(basketProduct);
		newBasketProduct.setUsername(username);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newBasketProduct.getId()).toUri();
		return ResponseEntity.created(uri).build();

	}

}
