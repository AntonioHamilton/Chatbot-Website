# 📐 Regras de IA do Projeto para BlogPessoal

# 0. Regras da IA

- Não altere trechos de código ou arquivos que eu não pedi para modificar.
- Explique o que foi feito de forma direta, clara e concisa.
- Só forneça explicações longas ou detalhadas se eu pedir explicitamente.
- Sempre pergunte antes de assumir contexto ou tomar decisões ambíguas.
- Responda com o mínimo necessário para que eu entenda e execute, sem repetições.
- Quando possível, entregue respostas com exemplos prontos para uso.
- Nunca inclua frases de encerramento como “espero que isso ajude”.
- Nunca invente informações ou estruturas não existentes no projeto.

## 1. Estrutura de Pastas

- **src/**: Todo o código fonte deve ficar dentro desta pasta.
  - **src/pages/**: Páginas do Next.js.
  - **src/components/**: Componentes reutilizáveis.
  - **src/styles/**: Estilos globais e arquivos SCSS.
  - **src/services/**: Serviços de API e integrações externas.
  - **src/utils/**: Funções utilitárias.
  - **src/types/**: Tipos TypeScript globais.
- **public/**: Arquivos estáticos (imagens, favicon, etc).

## 2. Padrão de Código

- Utilize **TypeScript** em todos os arquivos `.ts` e `.tsx`.
- Componentes devem ser **function components**.
- Use **arrow functions** para componentes e funções utilitárias.
- Nomes de arquivos de componentes em **PascalCase**.
- Nomes de arquivos utilitários em **camelCase**.
- Sempre tipar props e funções.
- Use **React Hooks** para lógica de estado e efeitos.

## 3. Estilização

- Utilize **SCSS** para estilização de componentes (`.module.scss`).
- Siga o padrão **BEM** (Block Element Modifier) para nomear classes CSS.
- Estilos globais devem estar em `src/styles/globals.scss`.
- Não utilizar styled-components ou outras libs de CSS-in-JS.

## 4. Lint e Formatação

- Use **ESLint** com o padrão do repositório (Airbnb + Prettier).
- Use **Prettier** para formatação automática.
- Nunca faça commit com erros de lint.
- Utilize o script `lint` antes de subir código.

## 5. Commits e Versionamento

- Siga o padrão de commits semânticos:
  - `feat`: Nova funcionalidade
  - `fix`: Correção de bug
  - `docs`: Documentação
  - `style`: Mudança de formatação (espaços, ponto e vírgula, etc)
  - `refactor`: Refatoração de código
  - `test`: Adição ou ajuste de testes
  - `chore`: Outras mudanças (build, configs, etc)
- Use **husky** para hooks de pré-commit (lint e prettier).

## 6. Testes

- Utilize **Jest** e **@testing-library/react** para testes.
- Os testes devem ficar em arquivos `*.test.tsx` ou `*.spec.tsx` dentro da pasta do componente ou em `__tests__`.

## 7. Configurações Gerais

- O arquivo `.env.example` deve ser mantido atualizado com todas as variáveis de ambiente necessárias.
- O projeto deve rodar com `yarn` ou `npm` sem erros após o clone.
- O arquivo `README.md` deve ser atualizado com instruções de uso e desenvolvimento.

## 8. Dependências

- Todas as dependências devem ser verificadas contra vulnerabilidades conhecidas na base do NPM.
- Caso alguma dependência possua vulnerabilidade, deve ser atualizada para uma versão segura ou substituída por outra alternativa.
- Mantenha as dependências sempre atualizadas.
- Não adicionar dependências desnecessárias.

## 9. Organização de Imports

- Imports de bibliotecas externas primeiro, depois imports internos.
- Separar imports por uma linha em branco.

## 10. Gerenciamento de Estado

- Para estado global, utilize a **Context API** do React.
- Crie contextos em `src/contexts` e provedores que encapsulem a lógica de estado.
- Evite prop-drilling excessivo; prefira o uso de contextos para estados compartilhados por múltiplos componentes.

## 11. Acessibilidade (a11y)

- Utilize HTML semântico sempre que possível (`<nav>`, `<main>`, `<article>`, `<aside>`, etc.).
- Garanta que todos os elementos interativos (botões, links) sejam acessíveis via teclado.
- Imagens devem ter o atributo `alt` preenchido, a menos que sejam puramente decorativas (nesse caso, `alt=""`).
- Utilize atributos ARIA quando necessário para melhorar a experiência com leitores de tela.
