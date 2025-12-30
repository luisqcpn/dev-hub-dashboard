# DevHub Dashboard

Mini dashboard de desenvolvedores para demonstrar uma stack básica de front-end moderna:

- **Next 15** (App Router)
- **React 19**
- **TypeScript**
- **Zustand** (estado global)
- **styled-components** (estilização)
- **Axios** (chamadas HTTP)
- **Jest + Testing Library** (testes básicos)

## Funcionalidades

- Lista de desenvolvedores consumidos da API pública `jsonplaceholder.typicode.com`;
- Conversão dos dados crus para um modelo `Dev` tipado com TypeScript;
- Filtro por perfil: `frontend`, `backend`, `fullstack`;
- Favoritar/desfavoritar devs usando **estado global com Zustand**;
- Tema **claro/escuro** com **styled-components** + Zustand;
- Testes unitários de componente (`DevCard`) e de store (`DevStore`).

## Rodando o projeto

```bash
# instalar dependências
npm install

# subir o servidor de desenvolvimento
npm run dev

# abrir no navegador
# http://localhost:3000

# rodar os testes
npm test
```

## O que este projeto mostra para recrutadores

- Uso de **Next.js 15** com estrutura de `app/`;
- Código em **TypeScript** com tipos explícitos (`Dev`, `DevRole`, etc.);
- Organização em camadas:
  - `services/` para chamadas de API com **Axios**;
  - `store/` para estado global com **Zustand**;
  - `components/` com **styled-components**;
- Noção de **Node/npm** (scripts, dependências, devDependencies);
- Conhecimento básico de **testes com Jest** em componentes React e stores.

Você pode forkar, ajustar o layout, mudar o tema ou trocar o domínio (por exemplo, em vez de devs, poderia ser catálogo de filmes, board de tarefas, etc.), mantendo a mesma stack pedida nas vagas.
