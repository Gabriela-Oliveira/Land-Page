package br.com.jonsons.landpage.controller;

import java.sql.SQLException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.jonsons.landpage.exceptions.CpfRepetidoException;
import br.com.jonsons.landpage.exceptions.EnderecoNotFoundException;
import br.com.jonsons.landpage.exceptions.FuncionarioNotFoundException;
import br.com.jonsons.landpage.exceptions.SalarioInvalidoException;
import br.com.jonsons.landpage.exceptions.UsuarioNotFoundException;

@RestControllerAdvice
public class ExceptionController {

	@ExceptionHandler(FuncionarioNotFoundException.class)
	public ResponseEntity<String> tratarFuncionarioNotFound(FuncionarioNotFoundException exception) {
		String msg = "Funcionario nao encontrado";

		return ResponseEntity.notFound().header("j-funcionarioerro-msg", msg)
				.header("j-funcionarioerro-code", "FUNC_NOT_FOUND")
				.header("j-funcionarioerro-value", exception.getId().toString()).build();
	}

	@ExceptionHandler(CpfRepetidoException.class)
	public ResponseEntity<String> tratarCpfRepetido(CpfRepetidoException exception) {
		String msg = "O CPF informado ja existe";

		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).header("j-cpfrepetido-msg", msg)
				.header("j-cpfrepetido-code", "CPF_ALREADY_EXISTS")
				.header("j-cpfrepetido-value", exception.getCpf().toString()).build();
	}

	@ExceptionHandler(SalarioInvalidoException.class)
	public ResponseEntity<String> tratarSalarioException(SalarioInvalidoException exception) {
		String msg = "O salario informado é menor que o salario minimo";

		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).header("j-salarioerro-msg", msg)
				.header("j-salarioerro-code", "NOT_ACCEPTED")
				.header("j-salarioerro-value", exception.getSalario().toString()).build();
	}

	@ExceptionHandler(UsuarioNotFoundException.class)
	public ResponseEntity<String> tratarEnderecoNotFoundException(UsuarioNotFoundException exception) {
		String msg = "Endereço nao encontrado";

		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.header("j-usuarioerro-msg", msg)
				.header("j-usuarioerro-code", "NOT_FOUND")
				.header("j-usuarioerro-value", exception.getCodigo().toString()).build();
	}

	@ExceptionHandler(EnderecoNotFoundException.class)
	public ResponseEntity<String> tratarEnderecoNotFoundException(EnderecoNotFoundException exception) {
		String msg = "Endereço nao encontrado";

		return ResponseEntity.status(HttpStatus.NOT_FOUND).header("j-enderecoerro-msg", msg)
				.header("j-enderecoerro-code", "NOT_FOUND")
				.header("j-enderecoerro-value", exception.getCodigo().toString()).build();
	}

	@ExceptionHandler(NullPointerException.class)
	public ResponseEntity<String> tratarNllPointerException(NullPointerException exception) {
		String msg = "Há campos requeridos vazios";

		return ResponseEntity.badRequest().header("j-infoerro-msg", msg)
				.header("j-infoerro-code", "BODY_BAD_INFO")
				.header("j-infoerro-value", exception.getMessage().toString()).build();
	}

	@ExceptionHandler(SQLException.class)
	public ResponseEntity<String> tratarSqlException(SQLException exception) {
		String msg = "Erro no banco de dados";

		return ResponseEntity.badRequest().header("j-banco-msg", msg).header("j-banco-code", "DATA_BASE_ERRO")
				.header("j-banco-value", exception.getMessage().toString()).build();
	}
}