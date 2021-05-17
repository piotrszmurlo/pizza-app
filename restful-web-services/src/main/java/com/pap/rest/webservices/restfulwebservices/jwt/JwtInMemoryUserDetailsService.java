package com.pap.rest.webservices.restfulwebservices.jwt;
//webservices.restfulwebservices.
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	@Autowired
	private JwtUserDetailsJpaRepository jwtUserDetailsJpaRepository;
//  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
//
//  static {
//    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
//        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2", "Mati", "Roszko", "123123123", "Grodno", "Bialostocka", "11"));
////    inMemoryUserList.add(new JwtUserDetails(2L, "ranga",
////            "$2a$10$GGfW0opzrPHwVOwj63MchOacHi0DCCe4dKPol6FN3qXwaNh1CrSUu", "ROLE_USER_2"));
//  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
//        .filter(user -> user.getUsername().equals(username)).findFirst();
//
//    if (!findFirst.isPresent()) {
//      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
//    }
	  UserDetails findFirst = jwtUserDetailsJpaRepository.findByUsername(username);
	 
    return findFirst;
  }

}


