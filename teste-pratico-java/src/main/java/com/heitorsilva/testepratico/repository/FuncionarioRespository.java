package com.heitorsilva.testepratico.repository;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heitorsilva.testepratico.model.Funcionario;

@Repository
public interface FuncionarioRespository extends CrudRepository<Funcionario, Long> {

	@Query(value = "SELECT * FROM funcionario f WHERE f.login LIKE CONCAT('%',:login,'%') OR f.cpf LIKE CONCAT('%',:cpf,'%')", nativeQuery = true)
	List<Funcionario> findFuncionario(String login, String cpf);
	
	@Query(value = "SELECT * FROM funcionario f WHERE f.data_nascimento BETWEEN :dataIncial and :dataFinal", nativeQuery = true)
	List<Funcionario> findByInterval(String dataIncial, String dataFinal);
	
}
