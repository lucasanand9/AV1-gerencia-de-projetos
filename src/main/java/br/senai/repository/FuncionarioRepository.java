package br.senai.repository;

import br.senai.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
    public Funcionario findByCpf(String cpf);
    public Funcionario findByNome(String nome);
    public List<Funcionario> findByTelefoneLike(String telefone);
    public Funcionario findByNomeAndPassword(String nome, String password);
}
