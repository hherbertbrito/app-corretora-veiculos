
package com.heitorsilva.testepratico.resource.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.hibernate5.HibernateQueryException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heitorsilva.testepratico.exceptions.CustomExceprion;
import com.heitorsilva.testepratico.exceptions.DuplicateKeyException;
import com.heitorsilva.testepratico.model.Funcionario;
import com.heitorsilva.testepratico.repository.FuncionarioRespository;
import com.heitorsilva.testepratico.resource.IResource;

@RestController
@RequestMapping("/api/funcionario")
public class FuncionarioResource implements IResource<Funcionario> {

	@Autowired
	private FuncionarioRespository repository;

	public ResponseEntity<?> show() {
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> create(Funcionario entity) {
		System.out.println("Verificar se usuario existe");
		if (verifyIfFuncionarioExist(entity)) {
			System.out.println("Error::create::CPF e/ou Login já cadastrados");
			throw new DuplicateKeyException("CPF e/ou Login já cadastrados.");
		}
		return new ResponseEntity<>(repository.save(entity), HttpStatus.CREATED);
	}

	public ResponseEntity<?> update(Funcionario entity) {
		try {
			return new ResponseEntity<>(repository.save(entity), HttpStatus.CREATED);
		} catch (Exception e) {
			throw new CustomExceprion(e.getMessage());
		}
	}

	public ResponseEntity<?> delete(Long id) {
		try {
			repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (HibernateQueryException e) {
			throw new CustomExceprion(e.getMessage());
		}
	}

	@Override
	public ResponseEntity<?> relatorio(String dataInicial, String dataFinal) {
		DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		LocalDate dataInit = LocalDate.parse(dataInicial, format);
		LocalDate dataFim = LocalDate.parse(dataFinal, format);
		return new ResponseEntity<>(repository.findByInterval(dataInit.toString(), dataFim.toString()), HttpStatus.OK);

	}

	private boolean verifyIfFuncionarioExist(Funcionario f) {
		System.out.println("Verificar se usuario existe");
		return repository.findFuncionario(f.getLogin(), f.getCpf()).size() > 0;
	}

}
