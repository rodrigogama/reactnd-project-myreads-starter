# Projeto MyReads

Este é o primeiro projeto desenvolvido para o nanodegree de React da Udacity. O App possui três prateleiras de livros: quero ler, estou lendo e lido. Os livros são disponibilizados via API fornecida pela Udacity. Por meio desta API é possível alterar os livros entre as estantes do projeto, além de pesquisar novos livros.

## Como iniciar a aplicação

Para iniciar o ambiente de desenvolvimento, execute os seguintes comandos:

* `npm install`: instala as dependências necessárias para rodas o projeto
* `npm start`: inicia um server local com o projeto rodando.

## Estrutura do projeto
```bash
├── CONTRIBUTING.md
├── README.md - Este arquivo.
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── components
    │   │── Book
    │   │   ├── index.js
    │   │   └── Book.js
    │   │── BookList
    │   │   ├── index.js
    │   │   └── BookList.js
    │   │── BookShelf
    │   │   ├── index.js
    │   │   └── BookShelf.js
    │   │── SearchBar
    │   │   ├── index.js
    │   │   └── SearchBar.js
    │   │── Loader
    │   │   ├── index.js
    │   │   └── Loader.js
    │   │── Snackbar
    │   │   ├── index.js
    │   │   └── Snackbar.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── pages
    │   │── Gallery
    │   │   ├── index.js
    │   │   └── Gallery.js
    │   └── Search
    │       ├── index.js
    │       └── Search.js
    ├── App.css
    ├── App.js
    ├── BooksAPI.js
    ├── index.css
    ├── .babelrc
    ├── .eslintrc
    └── index.js
```

## Importante

Para realizar buscas de livros na aplicação, utilize os termos encontrados no arquivo [SEARCH_TERMS.md](SEARCH_TERMS.md).