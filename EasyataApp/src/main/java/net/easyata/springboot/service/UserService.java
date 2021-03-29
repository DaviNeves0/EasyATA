package net.easyata.springboot.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import net.easyata.springboot.model.User;
import net.easyata.springboot.web.dto.UserRegistrationDto;

public interface UserService extends UserDetailsService{
	User save(UserRegistrationDto registrationDto);
}
