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

import br.com.jonsons.landpage.domain.Funcionarios;
import br.com.jonsons.landpage.service.FuncionarioService;


@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

	//injeção de dependência
			@Autowired 
			FuncionarioService funcionarioService;
			
			
			//aqui vai pegar todas as informações dos Usuarios e Funcionarios
			@GetMapping
			public ResponseEntity<?> getAll(){
				return ResponseEntity.ok(funcionarioService.getAll());
			}
			
			@GetMapping("/{codigo}")
			public ResponseEntity<?>getById(@PathVariable Long codigo){
				return ResponseEntity.ok(funcionarioService.getById(codigo));
			}
			
			//aqui vão ser inseridos novos usuarios e funcioanarios
			@PostMapping
			public ResponseEntity<?> post(@RequestBody Funcionarios funcionario){
				return ResponseEntity.ok(funcionarioService.post(funcionario));
			}
			
			//aqui sera as atualizações de funcionarios e Usuarios
			@PutMapping("/{codigo}")
			public ResponseEntity<?>update(@PathVariable Long codigo,@RequestBody Funcionarios funcionario){
				return ResponseEntity.ok(funcionarioService.update(codigo, funcionario));
			}
			
			
			//Aqui será a parte de deletamentos de users e funcionarios
			@DeleteMapping("/{codigo}")
			public ResponseEntity<?>delete(@PathVariable Long codigo){
				funcionarioService.delete(codigo);
				return ResponseEntity.status(HttpStatus.OK).build();
			}
}
