# ◆ Imobiliária Extremo Oriente — Landing Page

Landing page institucional para o aplicativo da **Imobiliária Extremo Oriente**, projetada para converter visitantes em downloads do app (Android & iOS). Construída com foco em performance, design premium dark-mode e experiência mobile-first.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Seções da Página](#seções-da-página)
- [Design System](#design-system)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Responsividade](#responsividade)
- [Como Executar](#como-executar)
- [Build de Produção](#build-de-produção)
- [Assets](#assets)

---

## Visão Geral

A landing page serve como ponto de entrada para a divulgação do app da imobiliária, apresentando:

- **Catálogo de imóveis** com 500+ opções para venda e locação
- **Funcionalidades do app** (busca inteligente, mapa interativo, favoritos, notificações)
- **Depoimentos de clientes** reais com avaliações
- **CTAs de download** para Google Play e App Store
- **Estatísticas animadas** (500+ imóveis, 2.000+ downloads, 98% satisfação)

---

## Stack Tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| **Vite** | ^8.0.12 | Build tool e dev server com HMR |
| **HTML5** | — | Estrutura semântica da página |
| **CSS3 (Vanilla)** | — | Estilização completa com custom properties |
| **JavaScript (ES Modules)** | — | Interatividade e animações |
| **Google Fonts** | — | Tipografia (Playfair Display + Inter) |

### Sem dependências de runtime

O projeto utiliza **zero bibliotecas JavaScript externas**. Todas as animações, observers e interações são implementadas com APIs nativas do navegador:

- `IntersectionObserver` para animações on-scroll
- `requestAnimationFrame` para contadores animados
- CSS Keyframes para animações contínuas
- CSS Custom Properties para o design system

---

## Estrutura do Projeto

```
LandingPage7/
├── index.html              # Página principal (HTML semântico)
├── package.json            # Configuração do projeto e scripts
├── .gitignore              # Arquivos ignorados pelo Git
│
├── src/
│   ├── style.css           # Estilos globais (~1.286 linhas)
│   ├── main.js             # Lógica e interatividade (~183 linhas)
│   └── assets/
│       ├── hero.png         # Imagem hero (asset interno)
│       ├── javascript.svg   # Ícone JS
│       └── vite.svg         # Ícone Vite
│
└── public/                  # Assets estáticos (servidos na raiz)
    ├── favicon.svg          # Favicon do site
    ├── icons.svg            # Sprite de ícones SVG
    ├── hero-bg.png          # Background do hero (~833 KB)
    ├── app-mockup.png       # Mockup do app no celular (~550 KB)
    ├── testimonial-1.png    # Avatar — Mariana Costa
    ├── testimonial-2.png    # Avatar — Roberto Almeida
    ├── testimonial-3.png    # Avatar — Sandra Oliveira
    └── testimonial-4.png    # Avatar — Lucas Ferreira
```

---

## Seções da Página

| # | Seção | ID | Descrição |
|---|---|---|---|
| 1 | **Navbar** | `#navbar` | Navegação fixa com efeito glassmorphism no scroll e menu hamburger mobile |
| 2 | **Hero** | `#hero` | Seção principal com título, CTAs, estatísticas animadas e mockup do app com efeito float |
| 3 | **Features** | `#features` | Grid 3×2 com cards dos recursos do app (busca, catálogo, mapa, favoritos, notificações, segurança) |
| 4 | **Properties** | `#properties` | Grid de 3 cards de imóveis em destaque (venda e locação) |
| 5 | **Testimonials** | `#testimonials` | Grid 2×2 com depoimentos de clientes com avatares e avaliações 5 estrelas |
| 6 | **Download CTA** | `#download` | Seção de conversão com botões Google Play e App Store |
| 7 | **Footer** | — | Informações da empresa, navegação, contato e dados legais (CRECI) |

---

## Design System

### Paleta de Cores

O design utiliza um esquema **dark premium** com acentos em dourado:

```
Fundos (escuros):
  --black-deep:         #050505    (corpo principal)
  --black-rich:         #0a0a0a    (seções alternadas)
  --black-card:         #111111    (cards)
  --black-elevated:     #181818    (elementos elevados)
  --black-border:       #1f1f1f    (bordas sutis)
  --black-border-light: #2a2a2a    (bordas hover)

Dourado (acentos):
  --gold-100:           #fff8e1
  --gold-200:           #ffe082
  --gold-300:           #ffd54f
  --gold-400:           #d4a843    (principal)
  --gold-500:           #c9952a
  --gold-600:           #b8860b

Gradientes:
  --gold-gradient:      linear-gradient(135deg, #d4a843, #f5d98e, #c9952a, #a67c00)
  --gold-gradient-text: linear-gradient(135deg, #f5d98e, #d4a843, #f5d98e)
```

### Tipografia

| Uso | Fonte | Pesos |
|---|---|---|
| Títulos / Headings | `Playfair Display` (serif) | 400–900 |
| Corpo / UI | `Inter` (sans-serif) | 300, 400, 500, 600, 700 |

### Tokens de Espaçamento e UI

| Token | Valor |
|---|---|
| `--section-padding` | `120px 0` (desktop) / `80px 0` (mobile) |
| `--container-width` | `1200px` |
| `--radius-sm` | `8px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `20px` |
| `--radius-xl` | `28px` |

### Transições

| Token | Valor |
|---|---|
| `--transition-fast` | `0.2s cubic-bezier(0.4, 0, 0.2, 1)` |
| `--transition-medium` | `0.4s cubic-bezier(0.4, 0, 0.2, 1)` |
| `--transition-slow` | `0.6s cubic-bezier(0.4, 0, 0.2, 1)` |

---

## Funcionalidades JavaScript

### 1. Navbar com Scroll Effect
- Adiciona classe `navbar--scrolled` após 60px de scroll
- Aplica `backdrop-filter: blur(20px)` e borda inferior sutil

### 2. Menu Mobile (Hamburger)
- Toggle de menu fullscreen com animação de ícone (três barras → X)
- Bloqueia scroll do body quando aberto (`overflow: hidden`)
- Fecha automaticamente ao clicar em um link

### 3. Contadores Animados
- Usa `IntersectionObserver` com threshold de 50%
- Animação com easing `easeOutExpo` e duração de 2s
- Formata números com `toLocaleString('pt-BR')`

### 4. Animações On-Scroll (AOS-like)
- Sistema customizado sem dependência externa
- Atributos `data-aos` e `data-aos-delay` controlam as animações
- Observer com `rootMargin: '0px 0px -50px 0px'` para trigger natural

### 5. Smooth Scroll
- Intercepta cliques em âncoras (`a[href^="#"]`)
- Utiliza `scrollIntoView({ behavior: 'smooth' })`

### 6. Parallax no Hero
- Background do hero move a 30% da velocidade do scroll
- Aplica `scale(1.1)` para evitar gaps visuais

### 7. Mouse Glow nos Cards
- Efeito `radial-gradient` que segue o cursor sobre cards
- Aplicado em: `.feature-card`, `.property-card`, `.testimonial-card`
- Cor: `rgba(212, 168, 67, 0.04)` — dourado sutil

### 8. Fade-in da Página
- Body inicia com `opacity: 0` e transiciona para `1` no `window.load`

---

## Responsividade

A página é totalmente responsiva com 3 breakpoints principais:

| Breakpoint | Alvo | Mudanças Principais |
|---|---|---|
| `≤ 1024px` | Tablets | Hero em coluna única, grids 2 colunas, footer 2 colunas |
| `≤ 768px` | Mobile | Menu hamburger, grids 1 coluna, section padding reduzido |
| `≤ 480px` | Mobile pequeno | Botões empilhados, stats em coluna, store buttons 100% width |

### Técnicas Responsivas Utilizadas
- `clamp()` para tamanhos de fonte fluidos
- CSS Grid com colunas adaptáveis por breakpoint
- `min-height: 100vh` no hero
- Imagens com `max-width: 100%` e `object-fit: cover`

---

## Como Executar

### Pré-requisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd LandingPage7

# Instalar dependências
npm install
```

### Servidor de Desenvolvimento

```bash
npm run dev
```

O Vite iniciará o dev server com **Hot Module Replacement (HMR)** — alterações em HTML, CSS e JS serão refletidas instantaneamente no navegador.

---

## Build de Produção

```bash
# Gerar bundle otimizado
npm run build

# Pré-visualizar build localmente
npm run preview
```

O output será gerado no diretório `dist/` com:
- CSS e JS minificados
- Assets com hash para cache busting
- HTML otimizado

---

## Assets

### Imagens

| Arquivo | Tamanho | Uso |
|---|---|---|
| `hero-bg.png` | ~833 KB | Background da seção hero |
| `app-mockup.png` | ~550 KB | Mockup do app (hero + download) |
| `testimonial-1.png` | ~672 KB | Avatar — Mariana Costa |
| `testimonial-2.png` | ~632 KB | Avatar — Roberto Almeida |
| `testimonial-3.png` | ~599 KB | Avatar — Sandra Oliveira |
| `testimonial-4.png` | ~578 KB | Avatar — Lucas Ferreira |
| `favicon.svg` | ~10 KB | Favicon vetorial |
| `icons.svg` | ~5 KB | Sprite de ícones |

### Ícones

Todos os ícones da interface são **SVGs inline** — nenhuma dependência de icon libraries (Font Awesome, Material Icons, etc.).

---

## SEO

- **Idioma**: `lang="pt-BR"`
- **Title**: "Imobiliária Extremo Oriente — Encontre o imóvel dos seus sonhos"
- **Meta Description**: Descritiva e orientada a conversão
- **Heading hierarchy**: Um único `<h1>` na hero, `<h2>` por seção, `<h3>` por card
- **HTML semântico**: `<nav>`, `<section>`, `<footer>`, `<main>` implícito
- **Preconnect**: Google Fonts com `preconnect` para performance

---

## Licença

© 2026 Imobiliária Extremo Oriente. Todos os direitos reservados.
