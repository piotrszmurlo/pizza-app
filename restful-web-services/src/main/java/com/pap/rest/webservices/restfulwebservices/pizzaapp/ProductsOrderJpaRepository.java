package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsOrderJpaRepository extends JpaRepository<ProductsOrder, Long> {
	List<ProductsOrder> findByUserId(Long userId);
}
