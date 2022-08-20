<!-- BADGES -->
[![MIT License](https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
)](https://github.com/msHoffmann/infnet-website/blob/main/LICENSE)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://github.com/msHoffmann/)

<br />
    <img src="github/header-readme.png" alt="Portal de Eventos de Boardgames" />

<div align="center">
  <h3 align="center">Portal de Eventos de Boardgames</h3>
  <p align="center">
    Catálogo de Eventos onde os amantes de Boardgames podem se cadastrar e inscrever nos eventos desejados. 
    <br />
    <a href="https://polite-rolypoly-f0870d.netlify.app/"><strong>Acessar Demonstração »</strong></a>
  </p>
</div>


<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Projeto</a></li>
    <li><a href="#processo-de-trabalho">Processo de trabalho</a></li>
    <li>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
                <li><a href="#executando-a-api">Executando a API</a></li>
        <li><a href="#executando-o-site">Executando o Site</a></li>
      </ul>
    </li>
    <li><a href="#tecnologias-utilizadas">Tecnologias</a></li>
    <li><a href="#autor">Autor</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
    <li><a href="#licença">Licença</a></li>
  </ol>
</details>


# Projeto

Bem-vindo(a) ao meu terceiro projeto! Neste portal os boardgamers conseguem listar os eventos disponibilizados pelas empresas do seguimento, visualizar detalhes sobre eles e se inscrever nos eventos desejados.

O recurso de criação de conta permite que o usuário informe seus dados apenas uma vez, facilitando a inscrição em múltiplos eventos.

Além disso, as empresas também possuem acesso privado a área logada, onde podem gerenciar os eventos disponíveis sem depender de um programador para alterar essas informações do site.

Os recursos implementados foram:

    Layout Responsivo - se adequa a diferentes tamanhos de tela;
    Listagem Dinâmica dos eventos;
    Página Detalhada - mais informações do curso;
    Inscrição nos eventos desejados;
    Cadastro de Usuários;
    Autenticação - tanto dos usuários e Administradores/Empresas;
    Área Privada - disponível apenas para usuários logados;
    Gestão de Eventos - disponível apenas para usuários Administradores/Empresas.

A demonstração do site funcionando está disponível no link: https://polite-rolypoly-f0870d.netlify.app/

# Processo de Trabalho

A primeira parte começou com um problema: empresas do seguimento de Boardgames que precisam exibir seus eventos para o seu público-alvo e aceitar inscrições para participação dos mesmos.

Seguindo a proposta do Bootcamp, a solução do problema foi implementada em duas etapas: a primeira mais simples que permite exibir os eventos e receber inscrições. A segunda que incrementa as funcionalidades através do recurso de autenticação e gestão dos eventos.

Para manter o site em pleno funcionamento enquanto a segunda etapa era desenvolvida, foi criada uma `branch` no repositório para a parte 2. Apenas após finalizar a segunda etapa que o código foi mesclado para a `branch` `main`.

Como o foco deste projeto era o desenvolvimento do front-end, foi utilizado a biblioteca `json-server` para criar uma api falsa que recebe as requisições do front.

A gestão do projeto foi feita com base no ciclo PDCA (Planejar, Executar, Checar, Agir) e as tarefas foram repartidas com base no quadro Kanban. 


## Pré-requisitos

Instale no computador o [Git](https://git-scm.com/), o [Node.js](https://nodejs.org) e o gerenciador de pacotes `npm` (instalado junto com o Node.js).

## Executando a API

A API precisa estar funcionando para o site ser executado. Siga os passos abaixo para executá-la:

- Faça o download do código fonte no computador:
```sh
git clone https://github.com/msHoffmann/infnet-portalEventosBoardgames.git
```

- Com o terminal na pasta `api` execute os comandos abaixo para instalar as dependências e iniciar a API:
```sh
npm install
npm run start-dev
```

## Executando o site

- Vá até a pasta `front-end`;
- Duplique o arquivo `.env.example` e renomeie para `.env.local`. Na variável `REACT_APP_API_URL` coloque o endereço em que a api está rodando (Ex: http://localhost:3001);
- Com o terminal na pasta `front-end` execute os comandos abaixo para instalar as dependências e iniciar o site:
```sh
npm install
npm run start
```

## Usuários pré-cadastrados

O banco de dados da API tem os seguintes usuários de demonstração:

### Administrador

**E-mail:** admin@admin.com

**Senha:** 123456

### Aluno

**E-mail:** teste@boardgamer.com

**Senha:** 123456

# Tecnologias
- HTML5
- CSS
- Javascript
- React
- Bootstrap com Biblioteca (react-bootstrap)
- Redux (puro, sem toolkit)
- Styled-components
- json-server
- json-server-auth


# Autor
Frania Lopes Hoffmann - franiahoffmann@gmail.com

https://www.linkedin.com/in/frania-lopes-hoffmann/


# Agradecimentos

Agradeço ao [Infnet](https://www.infnet.edu.br/) e Professor Victor de Assis Campos Oliveira (https://www.linkedin.com/in/victorassis/) peloss primeiros passos e excelentes aulas no mundo da Programação.


# Licença

Este projeto esta sobe a licença MIT. Veja [LICENSE](https://github.com/msHoffmann/infnet-portalEventosBoardgames/blob/main/LICENSE) para mais informações.

