package br.com.jonsons.landpage.domain;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class Enderecos {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long codigo;
//	@NotNull
	private String cep;
//	@NotNull
	private String rua;
//	@NotNull
	private String bairro;
//	@NotNull
	private Long numero;
//	@NotNull
	private String cidade;
//	@NotNull
	private String estado;

	public Enderecos() {};
	
	public Enderecos(Long codigo, String cep, String rua, String bairro, Long numero, String cidade,
			String estado) {
		super();
		this.codigo = codigo;
		this.cep = cep;
		this.rua = rua;
		this.bairro = bairro;
		this.numero = numero;
		this.cidade = cidade;
		this.estado = estado;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

//	@Override
//	public String toString() {
//		return "Endereco [codigo=" + codigo + ", cep=" + cep + ", rua=" + rua + ", bairro=" + bairro + ", numero="
//				+ numero + ", cidade=" + cidade + ", estado=" + estado + "]";
//	}
	
}
