package br.com.jonsons.landpage.exceptions;

public class EnderecoNotFoundException extends Exception {
	
	private static final long serialVersionUID = -3465667300590172676L;
	private Long codigo;
	
	public EnderecoNotFoundException() {}

	public Long getCodigo() {
		return codigo;
	}
}
