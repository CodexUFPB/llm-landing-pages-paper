# Imobiliária Extremo Oriente - Landing Page Premium

Este repositório contém o código-fonte da Landing Page institucional e de conversão de alto padrão para a **Imobiliária Extremo Oriente**. O foco principal desta página é incentivar o download do aplicativo mobile oficial, que atua como um catálogo premium de imóveis para venda e locação de luxo.

O projeto foi projetado com uma experiência focada na conversão direta, seguindo uma abordagem *mobile-first*, com rigorosos padrões de acessibilidade (WCAG), interface sofisticada e segurança de frontend.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação robusta, limpa e amigável para SEO e leitores de tela.
- **Tailwind CSS v3 (via CDN Play / Configuração Customizada):** Estilização ágil com uma paleta de cores personalizada baseada em tons de luxo.
- **CSS3 Personalizado (style.css):** Efeitos visuais avançados como *glassmorphism*, efeitos de luz ativa (*Glow*), degradês dourados e transições fluidas.
- **JavaScript Modular (app.js):** Lógica interativa de frontend, tratamento de eventos e micro-interações sem dependências pesadas.
- **Ícones Vetoriais (Lucide Icons):** Biblioteca moderna de ícones vetoriais em formato SVG de alto desempenho.

---

## 📐 Estrutura do Projeto

```text
d:/Projetos/LIM/LandingPage3/
├── index.html          # Ponto de entrada principal com a marcação semântica HTML5
├── style.css           # Estilos personalizados, variáveis de design e animações
├── app.js              # Lógica de interatividade e segurança no carregamento do DOM
├── DESIGN.md           # Detalhamento do sistema de design, cores e tipografia de luxo
└── README.md           # Instruções técnicas de arquitetura e implantação (Este arquivo)
```

---

## 🎨 Diretrizes de Design (UI/UX)

O visual foi concebido para transmitir exclusividade, minimalismo e sofisticação:

- **Paleta de Cores:**
  - **Fundo Predominante:** Preto Profundo `#0a0a0a` para um visual elegante e confortável.
  - **Destaque Primário (Dourado Metálico):** Dourado Real `#D4AF37` para elementos de ação principais (CTAs), botões e realces.
  - **Destaque Secundário:** Tons de dourado escuro (`#9A7B1C`) e amarelo realce (`#FFD700`) para estados de *hover* e *focus*.
  - **Leitura:** Branco puro `#ffffff` e cinza claro `#e5e7eb` para garantir contraste adequado em textos longos.
- **Tipografia Premium:**
  - **Títulos (Headings):** Fonte **Cinzel** ou **Playfair Display**, que evocam elegância e o mercado imobiliário tradicional de alto padrão.
  - **Textos de Apoio (Body):** Fonte **Inter**, oferecendo clareza e alta legibilidade em todas as telas, especialmente em dispositivos móveis.
- **Micro-interações:** Transições suaves de escala ao passar o mouse (hover) nos botões das lojas e cards de depoimento, além de efeitos luminosos (*active glows*).

---

## ♿ Acessibilidade (WCAG)

Em total conformidade com as diretrizes do Vercel Web Interface:
- **Skip Link:** Inclusão de um link invisível focado no teclado para saltar diretamente para o conteúdo principal (`#main-content`), melhorando a navegação com leitores de tela.
- **Contraste de Cores:** Testado de forma a garantir o contraste mínimo exigido pela WCAG (4.5:1 para texto normal e 3:1 para texto grande).
- **ARIA Labels:** Todo botão ou link puramente visual ou de imagem possui descritores semânticos explícitos (`aria-label`).
- **Focus States:** Estados de foco visíveis em todos os elementos interativos usando `focus-visible:ring-2 focus-visible:ring-gold-primary`.
- **Preferencia de Movimento:** Animações projetadas para respeitar a configuração do sistema do usuário (`prefers-reduced-motion`).

---

## 🔒 Segurança de Frontend

Implementação com base no guia de melhores práticas de segurança de JavaScript:
- **Prevenção de XSS:** Ausência total de métodos inseguros que interpretam strings como código executável (como `innerHTML`, `insertAdjacentHTML`, `document.write` ou `eval`). Utilização estrita de `textContent` e construção manual de nós do DOM via JavaScript.
- **Content Security Policy (CSP):** Adição de políticas de controle via metatag HTML para mitigar injeção de scripts maliciosos de terceiros.
- **Proteção contra DOM Clobbering:** Escopo de variáveis estritamente local e modularizado, sem poluição do escopo global `window`.

---

## 🔧 Como Executar Localmente

Como o projeto é construído sobre pilares de extrema eficiência e portabilidade, não há necessidade de etapas complexas de compilação ou build:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sua-landingpage.git
   cd sua-landingpage
   ```
2. **Executar um servidor local simples:**
   - Usando Python 3+:
     ```bash
     python -m http.server 8000
     ```
   - Usando o Node.js (`http-server` ou `serve`):
     ```bash
     npx http-server . -p 8000
     ```
3. **Acessar no navegador:** Abra o endereço [http://localhost:8000](http://localhost:8000).

---

## 📝 Licença

Este projeto está licenciado sob os termos da licença MIT. Para mais detalhes, consulte o arquivo de licença no repositório.
