package com.pap.rest.webservices.restfulwebservices.jwt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface JwtUserDetailsJpaRepository extends JpaRepository<JwtUserDetails, Long> {

	JwtUserDetails findByUsername(String username);

}


