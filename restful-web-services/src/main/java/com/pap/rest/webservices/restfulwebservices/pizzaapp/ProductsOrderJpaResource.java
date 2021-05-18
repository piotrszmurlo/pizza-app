package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductsOrderJpaResource {

	@Autowired
	private ProductsOrderJpaRepository productsOrderRepository;

	@GetMapping("/jpa/orders")
	public List<ProductsOrder> getOrders() {
		return productsOrderRepository.findAll();

	}

	@GetMapping("/jpa/user/{userId}/order")
	public List<ProductsOrder> getOrdersForUser(@PathVariable long userId) {
		return productsOrderRepository.findByUserId(userId);
	}
	@GetMapping("/jpa/order/{orderId}")
	public ProductsOrder getOrderById(@PathVariable long orderId) {
		return productsOrderRepository.findById(orderId).get();
	}

	@PostMapping("/jpa/user/{userId}/order")
	public ResponseEntity<Void> createOrderForUser(@PathVariable long userId, @RequestBody ProductsOrder productsOrder) {
		ProductsOrder newProductsOrder = productsOrderRepository.save(productsOrder);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{orderId}").buildAndExpand(newProductsOrder.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/jpa/user/{userId}/order/{orderId}")
	public ResponseEntity<ProductsOrder> updateOrder(@PathVariable long userId, @PathVariable long orderId, @RequestBody ProductsOrder productsOrder){
		ProductsOrder updatedProductsOrder = productsOrderRepository.save(productsOrder);
		return new ResponseEntity<ProductsOrder>(productsOrder, HttpStatus.OK);
	}
}
