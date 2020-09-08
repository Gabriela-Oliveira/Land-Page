package br.com.jonsons.landpage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jonsons.landpage.domain.Funcionarios;
import br.com.jonsons.landpage.repository.FuncionarioRepositorio;

@Service
public class FuncionarioService {
	@Autowired 
	FuncionarioRepositorio funcionarioRepositorio;
	
	public List<Funcionarios> getAll(){
		return funcionarioRepositorio.findAll();
	}
	
	public Optional<Funcionarios> getById(Long codigo) {
		Optional<Funcionarios> funcionario = funcionarioRepositorio.findById(codigo);
		if(!funcionario.isPresent()) {
			return null;
		}
		return funcionario;
	}
	
	public Funcionarios post(Funcionarios funcionario) {
		return funcionarioRepositorio.save(funcionario);
	}
	
	public Funcionarios update(Long codigo, Funcionarios funcionario) {
		 Optional<Funcionarios> funcionarioAtualizado = funcionarioRepositorio.findById(codigo);
		 if(!funcionarioAtualizado.isPresent()) {
			 return null;
		 }
		 Funcionarios fun = funcionarioAtualizado.get();
		 if(funcionario.getCpf() != null) {
			 fun.setCpf(funcionario.getCpf());
		 }
		 
		 if(funcionario.getDatanascimento() != null) {
			 fun.setDatanascimento(funcionario.getDatanascimento());
		 }	 
		 
		 if(funcionario.getEmail() != null) {
			 fun.setEmail(funcionario.getEmail());
		 }
		 
		 if(funcionario.getEndereco() != null) {
			 fun.setEndereco(funcionario.getEndereco());
		 }
		 
		 if(funcionario.getNome() != null) {
			 fun.setNome(funcionario.getNome());
		 }
		 
		 if(funcionario.getSalario() != null) {
			 fun.setSalario(funcionario.getSalario());
		 }
		 
		 if(funcionario.getSenha() != null) {
			 fun.setSenha(funcionario.getSenha());
		 }
		 funcionarioRepositorio.save(fun);
		 return fun;
		}
	
		public void delete(Long codigo) {
			Optional<Funcionarios> funcionario = funcionarioRepositorio.findById(codigo);
			funcionarioRepositorio.delete(funcionario.get());
		}
}
