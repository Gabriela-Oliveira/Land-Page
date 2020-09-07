package br.com.jonsons.landpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jonsons.landpage.domain.Enderecos;

@Repository
public interface EnderecoRepository extends JpaRepository<Enderecos, Long>{

}
