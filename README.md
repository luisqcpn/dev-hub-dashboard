# DevHub Dashboard

Aplicação web desenvolvida para explorar a construção de um dashboard modular, com ênfase em tipagem estática, separação de responsabilidades e gerenciamento de estado global.  
O projeto aborda desde o consumo de uma API externa até a modelagem dos dados e a validação do comportamento da aplicação por meio de testes automatizados.

## Stack utilizada

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Zustand** (estado global)
- **styled-components** (estilização e theming)
- **Axios** (requisições HTTP)
- **Jest + Testing Library** (testes unitários)

## Funcionalidades

- Consumo de dados a partir da API pública `jsonplaceholder.typicode.com`;
- Mapeamento e tipagem dos dados em um modelo `Dev` utilizando TypeScript;
- Filtro de desenvolvedores por perfil: `frontend`, `backend` e `fullstack`;
- Favoritar e desfavoritar desenvolvedores utilizando **estado global com Zustand**;
- Alternância de tema **claro/escuro** com **styled-components** + Zustand;
- Testes unitários de componente (`DevCard`) e de store (`DevStore`).

## Executando o projeto localmente

```bash
# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev

# acessar no navegador
# http://localhost:3000

# executar os testes
npm test

