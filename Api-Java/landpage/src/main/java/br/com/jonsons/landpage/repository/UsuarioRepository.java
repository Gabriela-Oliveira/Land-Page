package br.com.jonsons.landpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jonsons.landpage.domain.Usuarios;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuarios, Long>{

}
