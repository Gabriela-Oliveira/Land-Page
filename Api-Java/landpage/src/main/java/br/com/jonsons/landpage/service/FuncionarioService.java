package br.com.jonsons.landpage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jonsons.landpage.domain.Funcionarios;
import br.com.jonsons.landpage.exceptions.CpfRepetidoException;
import br.com.jonsons.landpage.exceptions.FuncionarioNotFoundException;
import br.com.jonsons.landpage.exceptions.SalarioInvalidoException;
import br.com.jonsons.landpage.repository.FuncionarioRepositorio;

@Service
public class FuncionarioService {
	@Autowired 
	FuncionarioRepositorio funcionarioRepositorio;
	
	public List<Funcionarios> getAll(){
		return funcionarioRepositorio.findAll();
	}
	
	public Optional<Funcionarios> getById(Long codigo) throws FuncionarioNotFoundException {
		Optional<Funcionarios> funcionario = funcionarioRepositorio.findById(codigo);
		if(!funcionario.isPresent()) {
			throw new FuncionarioNotFoundException(codigo);
		}
		return funcionario;
	}
	
	public Funcionarios post(Funcionarios funcionario) throws CpfRepetidoException, SalarioInvalidoException {
		List<Funcionarios> listaFunc = funcionarioRepositorio.findAll();
		for (Funcionarios func : listaFunc) {
			if(funcionario.getCpf().equals(func.getCpf())) {
				throw new CpfRepetidoException(funcionario.getCpf());
			}
		}
		
		if(funcionario.getSalario() < 1045.00) {
			throw new SalarioInvalidoException(funcionario.getSalario());
		}
		return funcionarioRepositorio.save(funcionario);
	}
	
	public Funcionarios update(Long codigo, Funcionarios funcionario) throws FuncionarioNotFoundException {
		 Optional<Funcionarios> funcionarioAtualizado = funcionarioRepositorio.findById(codigo);
		 if(!funcionarioAtualizado.isPresent()) {
			 throw new FuncionarioNotFoundException(codigo);
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
	
		public void delete(Long codigo) throws FuncionarioNotFoundException {
			Optional<Funcionarios> funcionario = funcionarioRepositorio.findById(codigo);
			if(!funcionario.isPresent()) {
				throw new FuncionarioNotFoundException(codigo);
			}
			funcionarioRepositorio.delete(funcionario.get());
		}
}