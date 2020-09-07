package br.com.jonsons.landpage.domain;

public class Endereco {
	private Integer codigo;
	private String cep;
	private String rua;
	private String bairro;
	private Integer numero;
	private String cidade;
	private String estado;
	
	public Endereco() {}
	
	public Endereco(Integer codigo, String cep, String rua, String bairro, Integer numero, String cidade,
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

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
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

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
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

	@Override
	public String toString() {
		return "Endereco [codigo=" + codigo + ", cep=" + cep + ", rua=" + rua + ", bairro=" + bairro + ", numero="
				+ numero + ", cidade=" + cidade + ", estado=" + estado + "]";
	}
	
}
