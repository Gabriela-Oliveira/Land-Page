package br.com.jonsons.landpage.exceptions;

public class UsuarioNotFoundException extends Exception {

	private static final long serialVersionUID = 8948645639007174072L;
	private Long codigo;
	
	public UsuarioNotFoundException() {}
	
	public UsuarioNotFoundException(Long codigo) {
		this.codigo = codigo;
	}
	
	public Long getCodigo() {
		return codigo;
	}
}