package br.com.jonsons.landpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.jonsons.landpage.domain.Usuarios;
import br.com.jonsons.landpage.exceptions.UsuarioNotFoundException;
import br.com.jonsons.landpage.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	// injeção de dependência
	@Autowired
	UsuarioService usuarioService;

	// aqui vai pegar todas as informações dos Usuarios e Funcionarios
	@GetMapping
	public ResponseEntity<?> getAll() {
		return ResponseEntity.ok(usuarioService.getAll());
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<?> getById(@PathVariable Long codigo) throws UsuarioNotFoundException {
		return ResponseEntity.ok(usuarioService.getById(codigo));
	}

	// aqui vão ser inseridos novos usuarios e funcioanarios
	@PostMapping
	public ResponseEntity<?> post(@RequestBody Usuarios usuario) throws UsuarioNotFoundException {
		return ResponseEntity.ok(usuarioService.post(usuario));
	}

	// aqui sera as atualizações de funcionarios e Usuarios
	@PutMapping("/{codigo}")
	public ResponseEntity<?> update(@PathVariable Long codigo, @RequestBody Usuarios usuario)
			throws UsuarioNotFoundException {
		return ResponseEntity.ok(usuarioService.update(codigo, usuario));
	}

	// Aqui será a parte de deletamentos de users e funcionarios
	@DeleteMapping("/{codigo}")
	public ResponseEntity<?> delete(@PathVariable Long codigo) throws UsuarioNotFoundException {
		usuarioService.delete(codigo);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}