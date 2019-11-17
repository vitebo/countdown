# Countdown

![Actions Status](https://github.com/vitebo/countdown/workflows//nodejs/badge.svg)

Contagem regressiva até domingo

Aplicação desenvolvida em _javascript_

visualizar o resultado final: https://vitebo.github.io/countdown/

## O que é?

Um desafio proposto em um grupo de estudos:

## Regras do desafio

- Criar uma aplicação que receba uma data inicial (Por padrão o dia atual)
e informe quantos dias faltam até o próximo domingo!
- Bônus: Acrescentar Horas/minutos/segundos ao contador
- Pode ser resolvido tanto em PHP quanto Javascript.

## Técnologias utilizadas

- [Webpack](https://webpack.js.org/) como bundler
- [Pug](https://pugjs.org/api/getting-started.html) como _template engine_

## Estrutura do projeto

    .
    ├── README.md
    ├── LICENSE.md
    ├── src/
    |   ├── components/
    |   |   ├── clock/
    |   |   ├── header/
    |   |   ├── footer/
    |   |   └── reaming-time/
    |   ├── utils/
    |   |   └── time.pug
    |   ├── index.pug
    |   ├── app.js.pug
    |   └── app.css
    ├── webpack.config.js
    ├── package.json
    ├── yarn.lock
    ├── .editorconfig
    └── .gitignore

## Rodando o projeto?

### Requisitos

Node: v12.6.0

Utilizamods o [yarn](https://yarnpkg.com) ao invés do [npm](https://www.npmjs.com/) para gerenciar as dependências.

### Scrips

3. `dev` para subir a aplicação
4. `build` para criar o _bundle_ da aplicação
4. `deploy` dispara um deploy no [github pages](https://vitebo.github.io/countdown/)

