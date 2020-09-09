package br.com.jonsons.landpage.exceptions;

public class FuncionarioNotFoundException extends Exception {
	
	private static final long serialVersionUID = -3371502204931313498L;
	private Long id;
	
	public FuncionarioNotFoundException() {}

	public FuncionarioNotFoundException(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}
}