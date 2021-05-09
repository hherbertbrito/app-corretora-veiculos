package com.heitorsilva.testepratico.resource.impl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/ping")
public class PingResource {

	@GetMapping
	public String ping() throws JsonMappingException, JsonProcessingException {
		return "Hello world!!";
	}
	
}
