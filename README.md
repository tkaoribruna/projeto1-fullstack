# Projeto FullStack - ReactJS

Aplicação frontend desenvolvida em React para consultar e publicar ideias
utilizando uma API JSON pública. O sistema funciona como uma SPA (Single Page
Application): as ações são realizadas na mesma página, sem redirecionamento.

## Tecnologias utilizadas

- React e React DOM
- Vite
- Axios para as requisições HTTP
- Bootstrap para estilos e componentes visuais
- Lucide React para os ícones

## API utilizada

O projeto utiliza a API pública [DummyJSON](https://dummyjson.com/).

| Operação | Método | Endpoint | Uso |
|---|---|---|---|
| Listar publicações | GET | `/posts` | Carrega as publicações exibidas na página |
| Criar publicação | POST | `/posts/add` | Envia o título, o conteúdo e o identificador do usuário |

A URL base está configurada em `src/services/api.js`, e as chamadas da
aplicação estão centralizadas em `src/services/postsService.js`.

## Funcionalidades

- Carregamento das publicações da API ao abrir a aplicação;
- indicação visual de carregamento e de erro;
- abertura e cancelamento do formulário de publicação;
- foco automático no campo de título ao abrir o formulário;
- validação para não enviar título ou conteúdo vazios;
- envio de uma nova publicação para a API;
- inclusão imediata da publicação criada na lista da tela;
- exibição de título, conteúdo, tags, curtidas, descurtidas e visualizações.

## Decisões técnicas

### Hook obrigatório

Foi escolhido o hook `useRef`. Ele é utilizado em `FormPost.jsx` para
referenciar o campo de título e aplicar foco automaticamente quando o formulário
é aberto.

Também são utilizados `useState` para controlar o formulário, as publicações e
as mensagens da interface, e `useEffect` para carregar as publicações e aplicar
o foco inicial.

### Organização

- `src/components/`: componentes visuais da aplicação;
- `src/services/`: configuração do Axios e funções de comunicação com a API;
- `src/App.jsx`: estado principal e composição da tela;
- `src/main.jsx`: ponto de entrada da aplicação.

### Limitação da API

O endpoint `POST /posts/add` do DummyJSON simula a criação e retorna a
publicação criada, mas não persiste os dados permanentemente. Por isso, a nova
publicação aparece imediatamente na tela, porém pode desaparecer quando a página
for recarregada.

## Como executar

É necessário ter o Node.js instalado. No terminal, dentro da pasta do projeto,
execute:

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço exibido pelo Vite, normalmente
`http://localhost:5173`.

## Validação e build

Para verificar o código com o linter:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Responsabilidades dos integrantes

| Integrante | Responsabilidades |
|---|---|
| Daniel Durante Francisco Dias | Implementação de `src/services/api.js`, `src/services/postsService.js` e elaboração do README |
| Bruna Kaori Takuti | Implementação de `Header.jsx`, `ListaPost.jsx`, `PostCard.jsx`, `App.css` e `index.css` |
| Igor Rocha Cantieri | Implementação das demais partes da aplicação e integração dos recursos desenvolvidos pela equipe |

## Ferramentas de apoio

Foram consultadas documentações oficiais do React, Vite, Axios,
Bootstrap, Lucide React e DummyJSON.

Também foi utilizado um assistente de IA nativo do VSCODE para auxiliar na revisão
do código e da documentação. As sugestões foram analisadas,
adaptadas e validadas pela equipe.

  
### Integrantes
| Nome                              | Foto                                                                 | GitHub                                      |
|-----------------------------------|----------------------------------------------------------------------|---------------------------------------------|
| Bruna Kaori Takuti                | <img src="https://github.com/tkaoribruna.png" width="100"/>          | https://github.com/tkaoribruna              |
| Daniel Durante Francisco Dias     | <img src="https://github.com/Dandurant.png" width="100"/>            | https://github.com/Dandurant                |
| Igor Rocha Cantieri               | <img src="https://github.com/IgorRochaCantieri.png" width="100"/>    | https://github.com/IgorRochaCantieri        |
