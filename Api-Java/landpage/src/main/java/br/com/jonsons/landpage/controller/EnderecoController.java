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

import br.com.jonsons.landpage.domain.Enderecos;
import br.com.jonsons.landpage.exceptions.EnderecoNotFoundException;
import br.com.jonsons.landpage.service.EnderecoService;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

	// injeção de dependência
	@Autowired
	EnderecoService enderecoServico;

	// aqui vai pegar todas as informações dos Usuarios e Enderecos
	@GetMapping
	public ResponseEntity<?> getAll() {
		return ResponseEntity.ok(enderecoServico.getAll());
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<?> getById(@PathVariable Long codigo) throws EnderecoNotFoundException {
		return ResponseEntity.ok(enderecoServico.getById(codigo));
	}

	// aqui vão ser inseridos novos usuarios e funcioanarios
	@PostMapping
	public ResponseEntity<?> post(@RequestBody Enderecos endereco) {
		return ResponseEntity.ok(enderecoServico.post(endereco));
	}

	// aqui sera as atualizações de Enderecos e Usuarios
	@PutMapping("/{codigo}")
	public ResponseEntity<?> update(@PathVariable Long codigo, @RequestBody Enderecos endereco)
			throws EnderecoNotFoundException {
		return ResponseEntity.ok(enderecoServico.update(codigo, endereco));
	}

	// Aqui será a parte de deletamentos de users e Enderecos
	@DeleteMapping("/{codigo}")
	public ResponseEntity<?> delete(@PathVariable Long codigo) throws EnderecoNotFoundException {
		enderecoServico.delete(codigo);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
