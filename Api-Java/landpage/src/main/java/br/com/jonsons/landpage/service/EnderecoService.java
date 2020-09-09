package br.com.jonsons.landpage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jonsons.landpage.domain.Enderecos;
import br.com.jonsons.landpage.exceptions.EnderecoNotFoundException;
import br.com.jonsons.landpage.repository.EnderecoRepository;

@Service
public class EnderecoService {
	@Autowired 
	EnderecoRepository enderecoRepository;
	
	public List<Enderecos> getAll() {
		return enderecoRepository.findAll();
	}
	
	public Optional<Enderecos> getById(Long codigo) throws EnderecoNotFoundException {
		Optional<Enderecos> endereco = enderecoRepository.findById(codigo);
		if(!endereco.isPresent()) {
			throw new EnderecoNotFoundException(codigo);
		}
		return endereco;
	}
	
	public Enderecos post(Enderecos endereco) {
		return enderecoRepository.save(endereco);
	}

	public Enderecos update(Long codigo, Enderecos endereco) throws EnderecoNotFoundException {
		 Optional<Enderecos> enderecoAtualizado = enderecoRepository.findById(codigo);
		 if(!enderecoAtualizado.isPresent()) {
			 throw new EnderecoNotFoundException(codigo);
		 }
		 
		 Enderecos end = enderecoAtualizado.get();
		 if(endereco.getBairro() != null) {
			 end.setBairro(endereco.getBairro());
		 }
		 
		 if(endereco.getCep() != null) {
			 end.setCep(endereco.getCep());
		 }
		 
		 if(endereco.getCidade() != null) {
			 end.setCidade(endereco.getCidade());
		 }
		 
		 if(endereco.getEstado() != null) {
			 end.setEstado(endereco.getEstado());
		 }
		 
		 if(endereco.getNumero() != null) {
			 end.setNumero(endereco.getNumero());
		 }
		 
		 if(endereco.getRua() != null) {
			 end.setNumero(endereco.getNumero());
		 }
		 
		 enderecoRepository.save(end);
		 return end;
		}
	
		public void delete(Long codigo) throws EnderecoNotFoundException {
			Optional<Enderecos> endereco = enderecoRepository.findById(codigo);
			if(!endereco.isPresent()) {
				throw new EnderecoNotFoundException(codigo);
			}
			enderecoRepository.delete(endereco.get());
		}
}