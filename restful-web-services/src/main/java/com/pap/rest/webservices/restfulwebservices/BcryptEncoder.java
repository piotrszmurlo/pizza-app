package com.pap.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoder {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i=1; i<=10; i++) {
		String encodedString = encoder.encode("");
		System.out.println(encodedString);
		}
	}

}
