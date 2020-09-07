package br.com.jonsons.landpage.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.sun.istack.NotNull;

@Entity
@Table(name="Usuarios")
public class Usuarios {
	@Id
	private Integer codigo;
	@NotNull
	private String nome;
	@NotNull
	private String whatsapp;
	
	public Usuarios() {};
	
	public Usuarios(Integer codigo, String nome, String whatsapp) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.whatsapp = whatsapp;
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

	public String getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	@Override
	public String toString() {
		return "Usuarios [codigo=" + codigo + ", nome=" + nome + ", whatsapp=" + whatsapp + "]";
	}
	
}	