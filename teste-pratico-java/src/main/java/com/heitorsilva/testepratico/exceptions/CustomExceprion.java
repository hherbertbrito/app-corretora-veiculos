package com.heitorsilva.testepratico.exceptions;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = EXPECTATION_FAILED, value = EXPECTATION_FAILED)
@ResponseBody
public class CustomExceprion extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public CustomExceprion(String str) {
		super(str);
	}
	
}
