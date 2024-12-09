# Kit de iniciação Astro: Blog

```sh
npm create astro@latest -- --template blog
```

[![Abrir no StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Abrir com CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Abrir no GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Astronauta experiente?** Exclua este arquivo. Divirta-se!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Recursos:

- ✅ Estilo minimalista (faça o seu próprio!)
- ✅ Desempenho 100/100 do Lighthouse
- ✅ SEO-friendly com URLs canônicas e dados OpenGraph
- ✅ Suporte a Sitemap
- ✅ Suporte a RSS Feed
- ✅ Suporte a Markdown e MDX

## 🚀 Estrutura do projeto

Dentro do seu projeto Astro, você verá as seguintes pastas e arquivos:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

O Astro procura por arquivos `.astro` ou `.md` no diretório `src/pages/`. Cada página é exposta como uma rota com base em seu nome de arquivo.

Não há nada de especial sobre `src/components/`, mas é onde gostamos de colocar quaisquer componentes Astro/React/Vue/Svelte/Preact.

O diretório `src/content/` contém "coleções" de documentos Markdown e MDX relacionados. Use `getCollection()` para recuperar postagens de `src/content/blog/` e verifique o tipo do seu frontmatter usando um esquema opcional. Veja [documentação de Coleções de Conteúdo do Astro](https://docs.astro.build/en/guides/content-collections/) para saber mais.

Quaisquer ativos estáticos, como imagens, podem ser colocados no diretório `public/`.

## 🧞 Comandos

Todos os comandos são executados da raiz do projeto, de um terminal:

| Comando | Ação |
| :------------------------ | :----------------------------------------------- |
| `npm install` | Instala dependências |
| `npm run dev` | Inicia o servidor de desenvolvimento local em `localhost:4321` |
| `npm run build` | Construa seu site de produção em `./dist/` |
| `npm run preview` | Visualize sua construção localmente, antes de implantar |
| `npm run astro ...` | Execute comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtenha ajuda usando o Astro CLI |

## 👀 Quer saber mais?

Confira [nossa documentação](https://docs.astro.build) ou entre em nosso [servidor Discord](https://astro.build/chat).

## Crédito

Este tema é baseado no adorável [Bear Blog](https://github.com/HermanMartinus/bearblog/).
