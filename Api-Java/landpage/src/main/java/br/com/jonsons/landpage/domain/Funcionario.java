package br.com.jonsons.landpage.domain;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name="Funcionarios")
public class Funcionario {
	@Id
	private Integer codigo;
	@NotNull
	private String nome;
	@NotNull
	private String cpf;
	@NotNull
	private String email;
	@NotNull
	private String senha;
	@NotNull
	private LocalDate dataNascimento;
	@NotNull
	private Double salario;
	private Endereco endereco;
	
	public Funcionario() {};
	
	public Funcionario(Integer codigo, String nome, String cpf, String email, String senha, LocalDate dataNascimento,
			Double salario, Endereco endereco) {
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

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
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

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "Funcionario [codigo=" + codigo + ", nome=" + nome + ", cpf=" + cpf + ", email=" + email + ", senha="
				+ senha + ", dataNascimento=" + dataNascimento + ", salario=" + salario + ", endereco=" + endereco
				+ "]";
	}
	
	
	
}
