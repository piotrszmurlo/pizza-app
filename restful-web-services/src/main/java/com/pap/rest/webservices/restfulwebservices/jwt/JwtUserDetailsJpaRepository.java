package com.pap.rest.webservices.restfulwebservices.jwt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JwtUserDetailsJpaRepository extends JpaRepository<JwtUserDetails, Long> {

	JwtUserDetails findByUsername(String username);

}


