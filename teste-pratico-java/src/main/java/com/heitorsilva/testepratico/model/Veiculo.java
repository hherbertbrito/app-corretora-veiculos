package com.heitorsilva.testepratico.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Veiculo {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	
	@Column(length = 10, nullable = false, unique = true)
	private String placa;
	
	@Column(nullable = false)
	private Boolean ativo;
	
	@Column(length = 4, nullable = false)
	private String anoFabricacao;
	
	@Column(length = 4, nullable = false)
	private String anoModelo;
	
	@Column(length = 40, nullable = false, unique = true)
	private String chassi;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataCadastro;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataDesativacao;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataAtivacao;
	
	@Column(length = 30, nullable = false)
	private String Modelo;
	
	@Column(length = 20, nullable = true)
	private String cor;
	
	@Column(nullable = false)
	private BigDecimal consumoMedioKM;
	
	@Column(nullable = false)
	private Integer qtdPassageiros;

	public Long getId() {
		return id;
	}

	public String getPlaca() {
		return placa;
	}

	public Boolean getAtivo() {
		return ativo;
	}

	public String getAnoFabricacao() {
		return anoFabricacao;
	}

	public String getAnoModelo() {
		return anoModelo;
	}

	public String getChassi() {
		return chassi;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public Date getDataDesativacao() {
		return dataDesativacao;
	}

	public Date getDataAtivacao() {
		return dataAtivacao;
	}

	public String getModelo() {
		return Modelo;
	}

	public String getCor() {
		return cor;
	}

	public BigDecimal getConsumoMedioKM() {
		return consumoMedioKM;
	}

	public Integer getQtdPassageiros() {
		return qtdPassageiros;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}

	public void setAnoFabricacao(String anoFabricacao) {
		this.anoFabricacao = anoFabricacao;
	}

	public void setAnoModelo(String anoModelo) {
		this.anoModelo = anoModelo;
	}

	public void setChassi(String chassi) {
		this.chassi = chassi;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public void setDataDesativacao(Date dataDesativacao) {
		this.dataDesativacao = dataDesativacao;
	}

	public void setDataAtivacao(Date dataAtivacao) {
		this.dataAtivacao = dataAtivacao;
	}

	public void setModelo(String modelo) {
		Modelo = modelo;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public void setConsumoMedioKM(BigDecimal consumoMedioKM) {
		this.consumoMedioKM = consumoMedioKM;
	}

	public void setQtdPassageiros(Integer qtdPassageiros) {
		this.qtdPassageiros = qtdPassageiros;
	}

}
