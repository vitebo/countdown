# Countdown

Contagem regressiva até domingo

Aplicação desenvolvida em _javascript_

visualizar o resultado final: https://vitebo.github.io/countdown/

## O que é?

Um desafio proposto em um grupo de estudos:

## Regras do desafio

- Criar uma aplicação que receba uma data inicial (Por padrão o dia atual) e informe quantos dias faltam até o próximo domingo!
- Bônus: Acrescentar Horas/minutos/segundos ao contador
- Pode ser resolvido tanto em PHP quanto Javascript.

## Técnologias utilizadas

- [Gulp](https://gulpjs.com/) para automatizar tarefas
- [Pug](https://pugjs.org/api/getting-started.html) como _template engine_

## Estrutura do projeto

    .
    ├── README.md
    ├── LICENSE.md
    ├── src/
    |   ├── assets/
    |   |   ├── css/
    |   |   |   └── style.css
    |   |   ├── icons/
    |   |   |   ├── github-icon.svg
    |   |   |   └── heart-icon.svg
    |   |   ├── js/
    |   |   |   └── main.js
    |   |   └── svgs/
    |   |       └── clock.svg
    |   ├── layouts/
    |   |   └── default.pug
    |   ├── partials/
    |   |   ├── footer.pug
    |   |   └── header.pug
    |   ├── index.pug
    |   └── index.html
    ├── gulpfile.js
    ├── package.json
    ├── yarn.lock
    ├── .editorconfig
    └── .gitignore

## Como rodar o projeto?

1. clone o projeto `sh git@github.com:vitebo/countdown.git`
2. acesse a pasta do projeto `cd countdown`
3. `npm install` para instalar as depêndencias
4. `npm run gulp server` para subir a aplicação

### Está utilizando o yarn?

substitua os 2 ultimos passos por:

3. `yarn install` para instalar as depêndencias
4. `yarn gulp server` para subir a aplicação

## Branchs

O projeto possui 2 _branchs_ principais

- **master**: branch principal com os arquivos fontes
- **gh-pages**: branch apenas com os arquivos estáticos
