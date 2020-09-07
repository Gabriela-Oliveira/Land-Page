package br.com.jonsons.landpage.domain;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity

public class Funcionarios {
	@Id
	@GeneratedValue
	private Long codigo;
//	@NotNull
	private String nome;
//	@NotNull
	private String cpf;
//	@NotNull
	private String email;
//	@NotNull
	private String senha;
//	@NotNull
	private LocalDate dataNascimento;
//	@NotNull
	private Double salario;
	private Long endereco;
	
	public Funcionarios() {};
	
	public Funcionarios(Long codigo, String nome, String cpf, String email, String senha, LocalDate dataNascimento,
			Double salario, Long endereco) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
		this.dataNascimento = dataNascimento;
		this.salario = salario;
		this.endereco = endereco;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public Long getEndereco() {
		return endereco;
	}

	public void setEndereco(Long endereco) {
		this.endereco = endereco;
	}

//	@Override
//	public String toString() {
//		return "Funcionario [codigo=" + codigo + ", nome=" + nome + ", cpf=" + cpf + ", email=" + email + ", senha="
//				+ senha + ", dataNascimento=" + dataNascimento + ", salario=" + salario + ", endereco=" + endereco
//				+ "]";
//	}
	
	
	
}