package br.com.jonsons.landpage.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.jonsons.landpage.domain.Usuarios;
import br.com.jonsons.landpage.exceptions.UsuarioNotFoundException;
import br.com.jonsons.landpage.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired 
	UsuarioRepository usuarioRepository;
	
	public List<Usuarios> getAll(){
		return usuarioRepository.findAll();
	}
	
	public Optional<Usuarios> getById(Long codigo) throws UsuarioNotFoundException {
		Optional<Usuarios> usuario = usuarioRepository.findById(codigo);
		if(!usuario.isPresent()) {
			throw new UsuarioNotFoundException(codigo);
		}
		return usuario;
	}
	
	public Usuarios post(Usuarios usuario) {
		return usuarioRepository.save(usuario);
	}
	
	public Usuarios update(Long codigo, Usuarios usuario) throws UsuarioNotFoundException {
		 Optional<Usuarios> usuarioAtualizado = usuarioRepository.findById(codigo);
		 if(!usuarioAtualizado.isPresent()) {
			 throw new UsuarioNotFoundException(codigo);
		 }
		 
		 Usuarios user = usuarioAtualizado.get();
		 if(usuario.getNome() != null) {
			 user.setNome(usuario.getNome());
		 }
		 
		 if(usuario.getWhatsapp() != null) {
			 user.setWhatsapp(usuario.getWhatsapp());
		 }	 
		 
		 usuarioRepository.save(user);
		 return user;
		}
	
		public void delete(Long codigo) throws UsuarioNotFoundException {
			Optional<Usuarios> usuario = usuarioRepository.findById(codigo);
			if(!usuario.isPresent()) {
				throw new UsuarioNotFoundException(codigo);
			} 
			usuarioRepository.delete(usuario.get());
		}
}