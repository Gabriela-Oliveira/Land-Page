package br.com.jonsons.landpage.exceptions;

public class CpfRepetidoException extends Exception{

	private static final long serialVersionUID = 3370495201574316513L;
	private String cpf;
	
	public CpfRepetidoException() {}
	
	public CpfRepetidoException(String cpf) {;
		this.cpf = cpf;
	}

	public String getCpf() {
		return cpf;
	}
}