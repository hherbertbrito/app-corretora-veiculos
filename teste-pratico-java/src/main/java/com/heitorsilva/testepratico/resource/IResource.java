package com.heitorsilva.testepratico.resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface IResource<T> {
	
	@GetMapping
	ResponseEntity<?> show();
	
	@PostMapping
	ResponseEntity<?> create(@RequestBody T obj);
	
	@PutMapping
	ResponseEntity<?> update(@RequestBody T obj);
	
	@DeleteMapping("/{id}")
	ResponseEntity<?> delete(@PathVariable("id") Long id);
	
	@GetMapping("/relatorio/{dataInicial}/{dataFinal}")
	ResponseEntity<?> relatorio(@PathVariable("dataInicial") String dataInicial, @PathVariable("dataFinal") String dataFinal);

}
