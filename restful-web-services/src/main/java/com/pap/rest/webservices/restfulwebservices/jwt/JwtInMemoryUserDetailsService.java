package com.pap.rest.webservices.restfulwebservices.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	@Autowired
	private JwtUserDetailsJpaRepository jwtUserDetailsJpaRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDetails findFirst = jwtUserDetailsJpaRepository.findByUsername(username);

		return findFirst;
	}

}
