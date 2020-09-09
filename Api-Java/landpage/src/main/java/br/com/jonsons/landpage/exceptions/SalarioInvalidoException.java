package br.com.jonsons.landpage.exceptions;

public class SalarioInvalidoException extends Exception {

	private static final long serialVersionUID = -677006232837591592L;
	private Double salario;
	
	public SalarioInvalidoException() {
	}

	public SalarioInvalidoException(Double salario) {
		this.salario = salario;
	}

	public Double getSalario() {
		return salario;
	}
}