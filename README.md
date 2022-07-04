# **TON API**

API do TON.

Desafio técnico utilizando arquitetura limpa e TDD como metodologia de trabalho, seguindo também princípios do SOLID.
<br /><br />


> ## ENDPOINTS

1. Cadastro de uma Conta
2. Login
3. Listagem de uma conta ( Autenticação necessária )
4. Atualização de uma conta ( Autenticação necessária )
5. Exclusão de uma conta ( Autenticação necessária )
6. Listagem da quantidade de acessos ( Autenticação necessária )
7. Incremento da quantidade de acessos ( Autenticação necessária )
8. Documentação

> ## TESTES

* Testes Unitários
* Testes de Integração (API Rest)
* Cobertura de Testes
* Mocks
* Stubs
* Fakes

> ## PRINCÍPIOS E PATTERNS

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)

* Factory
* Adapter
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

> ## API

* Documentação de API utilizando Swagger
* API REST com Express
* Segurança
* CORS
* Middlewares

> ## TYPESCRIPT

* POO Avançado
* Interface
* Namespace
* Utility Types
* Modularização de Paths
* Build

> ## BANCO DE DADOS

* connect
* create
* save
* getOne
* delete
* update




## EXECUÇÃO DO BANCO DE DADOS
```bash
Instalar o POSTGRESQL
Iniciar uma nova conexão ( PORT 5432 )
$ CREATE DATABASE postgres
```

## EXECUTAR O SERVIDOR

```bash
$ cd ton
$ npm install 
$ npm run typeorm migration:run
$ npm run dev:server
```

