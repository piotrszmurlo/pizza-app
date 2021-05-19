package com.pap.rest.webservices.restfulwebservices.jwt;

import java.util.Collection;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.pap.rest.webservices.restfulwebservices.pizzaapp.ProductsOrder;

@Entity
public class JwtUserDetails implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5155720064139820502L;

	@Id
	@GeneratedValue
	@Column(name = "USER_ID")
	private Long id;
	private String username;
	@JsonSetter
	private String password;
	@OneToMany(mappedBy = "user")
//	@JsonIgnoreProperties("user")
	private Set<ProductsOrder> usersOrder;
	@Transient
	private final Collection<? extends GrantedAuthority> authorities;
	private String name;
	private String surname;
	private String number;

	public void setUsername(String username) {
		this.username = username;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private String city;
	private String street;
	private String streetNumber;

	protected JwtUserDetails() {
		this.id = null;
		this.username = "";
		this.password = "";
		this.authorities = null;
	}

	public String getName() {
		return name;
	}

	public JwtUserDetails(Long id, String username, String password, Set<ProductsOrder> productsOrder,
			Collection<? extends GrantedAuthority> authorities, String name, String surname, String number, String city,
			String street, String streetNumber) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.usersOrder = productsOrder;
		this.authorities = authorities;
		this.name = name;
		this.surname = surname;
		this.number = number;
		this.city = city;
		this.street = street;
		this.streetNumber = streetNumber;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@JsonIgnore
	public Set<ProductsOrder> getUsersOrder() {
		return usersOrder;
	}

	public void setUsersOrder(Set<ProductsOrder> usersOrder) {
		this.usersOrder = usersOrder;
	}

	public static Long getSerialversionuid() {
		return serialVersionUID;
	}

}
