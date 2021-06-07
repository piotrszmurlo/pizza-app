package com.pap.rest.webservices.restfulwebservices.jwt;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.pap.rest.webservices.restfulwebservices.pizzaapp.ProductsOrder;
import com.pap.rest.webservices.restfulwebservices.pizzaapp.SoldProduct;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtUserDetailsJpaResource {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private JwtUserDetailsJpaRepository jwtUserDetailsJpaRepository;

	@GetMapping("/jpa/users")
	public List<JwtUserDetails> getAllUsers(String username) {
		return jwtUserDetailsJpaRepository.findAll();
	}

	@GetMapping("/jpa/user/{username}")
	public JwtUserDetails getUserByUsername(@PathVariable String username) {
		return jwtUserDetailsJpaRepository.findByUsername(username);
	}

	@PostMapping("/jpa/user/{username}")
	public ResponseEntity<Void> addUser(@RequestBody JwtUserDetails user) throws URISyntaxException {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		JwtUserDetails newUser = jwtUserDetailsJpaRepository.save(user);
		newUser.setPassword(user.getPassword());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{username}").buildAndExpand(newUser.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/jpa/user/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable long id) {
		JwtUserDetails user = jwtUserDetailsJpaRepository.findById(id).get();
		Set<ProductsOrder> orders = user.getUsersOrder();
		for(ProductsOrder order : orders) {
//			Set<SoldProduct> products = order.getProducts();
//			for(SoldProduct product : products) {
//				product.setProductsOrder(null);
//			}
			order.setCompleted(true);
			order.setUser(null);
		}
		jwtUserDetailsJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
