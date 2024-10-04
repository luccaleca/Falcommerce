# Estrutura de Arquivos do Back-end

Este documento descreve a estrutura de arquivos do back-end do projeto, explicando o propósito de cada diretório e arquivo principal.

## Diretório Raiz

- **server.js**: Ponto de entrada principal do servidor, responsável por iniciar a aplicação.
- **package.json**: Arquivo de configuração do Node.js que lista as dependências e scripts do projeto.
- **.gitignore**: Lista de arquivos e diretórios que o Git deve ignorar.

## Diretórios Principais

### /src

Contém o código-fonte do back-end.

- **/controllers**: Controladores que contêm a lógica de negócios e manipulam as requisições HTTP.
- **/models**: Modelos de dados que definem a estrutura das entidades no banco de dados.
- **/routes**: Definições das rotas da aplicação, mapeando URLs para controladores.
- **/middlewares**: Middlewares que processam requisições antes de chegarem aos controladores.
- **/config**: Configurações do banco de dados e outras configurações de ambiente.
- **/services**: Serviços que contêm lógica de negócios complexa ou interações com APIs externas.
- **/utils**: Funções utilitárias e helpers que são usadas em várias partes do projeto.

### /tests

Testes automatizados para o back-end.

- **/unit**: Testes unitários para funções e métodos individuais.
- **/integration**: Testes de integração para verificar a interação entre diferentes partes do sistema.

## Como os Arquivos se Relacionam

- **server.js** inicializa o servidor e carrega as configurações e rotas.
- **/routes** define as rotas que são mapeadas para funções específicas nos **/controllers**.
- **/controllers** utilizam **/models** para interagir com o banco de dados e **/services** para lógica de negócios complexa.
- **/middlewares** são aplicados nas rotas para autenticação, validação, etc.
- **/config** contém as configurações necessárias para conectar ao banco de dados e outras variáveis de ambiente.