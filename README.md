# 🌱 Broto — Diário de Plantas

Projeto integrador desenvolvido para as disciplinas de **Front-end** e **Programação Web**, unindo uma aplicação cliente em React a uma API REST em Java/Spring Boot.

O Broto é um diário digital de plantas: permite cadastrar as plantas que você já tem (ou deseja ter), acompanhar o estágio de crescimento de cada uma, registrar onde ficam, a frequência de rega e anotações de cuidado.

## Funcionalidades
- Cadastro de plantas com nome, espécie, status (tenho / desejo comprar), estágio de crescimento, local (sol, meia-sombra, sombra), frequência de rega e notas de cuidado;
- Listagem das plantas cadastradas, com busca e filtros;
- Visualização detalhada, edição e exclusão de cada planta;
- Persistência dos dados em banco de dados relacional (MySQL) via API REST.

## Tecnologias

**Front-end** (pasta `cliente/`)
- React
- CSS Modules
- Consumo de API via `fetch` (GET, POST, PUT, DELETE)

**Back-end** (pasta `api/`)
- Java + Spring Boot
- Spring Web
- JdbcTemplate
- MySQL
