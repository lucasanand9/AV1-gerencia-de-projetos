package br.senai.service;

import br.senai.model.Funcionario;

import java.util.List;

public interface FuncionarioService {

    List<Funcionario> findAll();
    Funcionario findById(Long id);
    Funcionario findByNome(String nome);
    Funcionario findByLoginAndSenha(String nome, String password);
    Funcionario save(Funcionario funcionario);
    void deleteById(Long id);
}
