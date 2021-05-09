package com.heitorsilva.testepratico.resource.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;

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
import com.heitorsilva.testepratico.model.Veiculo;
import com.heitorsilva.testepratico.repository.VeiculoRespository;
import com.heitorsilva.testepratico.resource.IResource;

@RestController
@RequestMapping("/api/veiculo")
public class VeiculoResource implements IResource<Veiculo> {

	@Autowired
	private VeiculoRespository repository;

	public ResponseEntity<?> show() {
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> create(Veiculo entity) {
		try {
			if (verifyIfVeiculoExist(entity)) {
				throw new DuplicateKeyException("Placa ou chassi já cadastrados");
			}
			
			entity.setDataCadastro(new Date());
			
			if(entity.getAtivo()) {
				entity.setDataAtivacao(new Date());
				entity.setDataDesativacao(null);
			} else {
				entity.setDataDesativacao(new Date());
				entity.setDataAtivacao(null);
			}
			
			return new ResponseEntity<>(repository.save(entity), HttpStatus.CREATED);
		} catch (ConstraintViolationException e) {
			throw new CustomExceprion("Metodo create " + e.getMessage());
		}
	}

	public ResponseEntity<?> update(Veiculo entity) {
		try {
			
			if(entity.getAtivo()) {
				entity.setDataAtivacao(new Date());
				entity.setDataDesativacao(null);
			} else {
				entity.setDataDesativacao(new Date());
				entity.setDataAtivacao(null);
			}
			
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
		DateTimeFormatter  format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		
		LocalDate dataInit = LocalDate.parse(dataInicial, format);
		LocalDate dataFim = LocalDate.parse(dataFinal, format);
		return new ResponseEntity<>(repository.findByInterval(dataInit.toString(), dataFim.toString()), HttpStatus.OK);
	}
	
	
	
	private boolean verifyIfVeiculoExist(Veiculo f) {
		return repository.findVeiculo(f.getPlaca(), f.getChassi()).size() > 0;
	}

}
