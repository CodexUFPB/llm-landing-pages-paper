# LandingPage6 🚀

Uma landing page moderna, pronta para produção, construída com **Next.js 16**, **React 18** e **Tailwind CSS 3.3**. Este projeto demonstra uma aplicação de página única (SPA) rápida, otimizada para SEO, com arquitetura de componentes limpa e pronta para implantar no Vercel, Netlify ou qualquer host Node.js.

---

## Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Pré‑requisitos](#pré‑requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Estilização & Tema](#estilização--tema)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Características

- **Renderização no Servidor (SSR)** e **Geração Estática** para SEO máximo.
- **Design responsivo** usando as utilities do Tailwind.
- **Ícones leves** via `lucide-react`.
- **Arquitetura modular** – `pages/index.js` como ponto de entrada, estilos globais em `styles/globals.css`.
- **Hot‑reload** durante o desenvolvimento com `next dev`.

---

## Tecnologias

| Camada | Tecnologia | Versão |
|--------|------------|--------|
| Framework | Next.js | ^16.2.6 |
| Biblioteca UI | React | 18.2.0 |
| Estilização | Tailwind CSS | 3.3.3 |
| PostCSS | postcss | 8.4.24 |
| Autoprefixer | autoprefixer | 10.4.14 |
| Ícones | lucide-react | ^0.331.0 |

---

## Pré‑requisitos

- **Node.js** ≥ 18.x (LTS recomendado)
- **npm** (já vem com o Node) ou **yarn** se preferir
- Git (para controle de versão)

---

## Instalação

```bash
# Clonar o repositório
git clone <url-do-repositório>
cd LandingPage6

# Instalar dependências
npm install
```

> **Dica**: Use `npm ci` para uma instalação limpa que segue exatamente o lockfile.

---

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento em `http://localhost:3000` com hot‑reload. |
| `npm run build` | Compila a aplicação para produção (static generation + SSR). |
| `npm start` | Executa a build de produção. |
| `npm run lint` | Roda as verificações ESLint embutidas no Next.js. |

---

## Estrutura do Projeto

```
LandingPage6/
├─ pages/                 # Componentes de página do Next.js
│   ├─ _app.js            # App customizado para importar CSS global
│   └─ index.js           # Entrada da landing page
├─ styles/                # Folha de estilos global (Tailwind + custom)
│   └─ globals.css        # Importado em _app.js
├─ public/                # Assets estáticos (imagens, favicons, etc.)
├─ tailwind.config.js     # Configurações do Tailwind e extensões de tema
├─ postcss.config.js      # Plugins do PostCSS
├─ package.json           # Metadados do projeto e scripts npm
└─ README.md              # ← este arquivo
```

---

## Estilização & Tema

O projeto usa **Tailwind CSS** com compilação JIT. Personalizações são definidas em `tailwind.config.js` – sinta‑se à vontade para estender a seção `theme` com as cores, espaçamentos ou tipografia da sua marca.

```js
// tailwind.config.js (trecho)
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Exemplo de cor da marca – ajuste conforme necessário
      },
    },
  },
  plugins: [],
};
```

Os estilos globais ficam em `styles/globals.css`. Eles incluem as diretivas base do Tailwind e eventuais resets personalizados:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Adicione utilitários ou sobrescritas customizadas abaixo */
```

---

## Deploy

A aplicação pode ser implantada em qualquer plataforma que suporte runtime Node.js.

### Vercel (recomendado)
1. Acesse https://vercel.com e importe o repositório.
2. O Vercel detecta automaticamente o Next.js e define o comando de build como `npm run build` e o diretório de saída como `.next`.
3. Clique em **Deploy**.

### Netlify
1. Crie um novo site a partir do Git.
2. Defina **Build command** como `npm run build` e **Publish directory** como `.next`.
3. Habilite o runtime **Node.js** (v18).

### Auto‑hosted (exemplo Docker)
```Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Contribuindo

Contribuições são bem‑vindas! Siga os passos abaixo:
1. Fork o repositório.
2. Crie uma branch de feature (`git checkout -b feat/minha-funcionalidade`).
3. Garanta que o código segue o estilo existente (utilities Tailwind, ESLint).
4. Abra um Pull Request com descrição clara das alterações.

---

## Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo `LICENSE` para detalhes.

---

*Gerado por Antigravity – seu assistente de codificação IA.*
