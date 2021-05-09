package com.heitorsilva.testepratico.repository;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.heitorsilva.testepratico.model.Funcionario;
import com.heitorsilva.testepratico.model.Veiculo;

@Repository
public interface VeiculoRespository extends CrudRepository<Veiculo, Long> {

	@Query(value = "SELECT * FROM veiculo v WHERE v.placa LIKE CONCAT('%',:placa,'%') OR v.chassi LIKE CONCAT('%',:chassi,'%')", nativeQuery = true)
	List<Veiculo> findVeiculo(String placa, String chassi);
	
	@Query(value = "SELECT * FROM veiculo v WHERE v.data_ativacao BETWEEN :dataIncial and :dataFinal", nativeQuery = true)
	Iterable<Veiculo> findByInterval(String dataIncial, String dataFinal);
	
}
