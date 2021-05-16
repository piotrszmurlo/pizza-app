package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketJpaRepository extends JpaRepository<BasketProduct, Long>{
	List<BasketProduct> findByUsername(String username);
}
