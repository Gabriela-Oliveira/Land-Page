package br.com.jonsons.landpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jonsons.landpage.domain.Funcionarios;

@Repository
public interface FuncionarioRepositorio extends JpaRepository<Funcionarios, Long>{

}
