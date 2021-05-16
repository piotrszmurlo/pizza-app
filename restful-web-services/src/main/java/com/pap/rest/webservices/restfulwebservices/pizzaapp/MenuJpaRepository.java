package com.pap.rest.webservices.restfulwebservices.pizzaapp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuJpaRepository extends JpaRepository<Product, Long>{

}
