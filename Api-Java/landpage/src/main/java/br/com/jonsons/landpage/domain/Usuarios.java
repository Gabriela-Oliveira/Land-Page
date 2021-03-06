package br.com.jonsons.landpage.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Usuarios {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long codigo;
//	@NotNull
	private String nome;
//	@NotNull
	private String whatsapp;
	
	public Usuarios() {};
	
	public Usuarios(Long codigo, String nome, String whatsapp) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.whatsapp = whatsapp;
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

	public String getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

//	@Override
//	public String toString() {
//		return "Usuarios [codigo=" + codigo + ", nome=" + nome + ", whatsapp=" + whatsapp + "]";
//	}
	
}	