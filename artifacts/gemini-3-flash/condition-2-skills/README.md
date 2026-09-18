# Imobiliária Extremo Oriente — Landing Page Premium

Este repositório contém o código-fonte de uma **Landing Page de Altíssimo Padrão** criada para a **Imobiliária Extremo Oriente**. O objetivo principal desta página é promover e incentivar o download do aplicativo móvel da imobiliária, o qual apresenta um catálogo exclusivo de imóveis residenciais e comerciais de luxo para venda e locação.

O design foi concebido com uma estética premium e imersiva nas cores **Preto e Dourado Metálico**, utilizando tecnologia moderna de desenvolvimento web estático, conformidade rígida de acessibilidade (A11y), otimização de performance contra layout shifts (CLS) e práticas seguras de desenvolvimento.

---

## 🎨 Especificações do Sistema de Design (Design Tokens)

Todas as definições estéticas foram estruturadas em variáveis semânticas no CSS para máxima consistência e facilidade de manutenção:

*   **Paleta de Cores (Luxo e Contraste Harmonioso):**
    *   `--bg-main` (Fundo Principal): `#0A0A0A` (Preto absoluto, proporcionando sofisticação e profundidade visual).
    *   `--bg-card` (Fundo de Cartões): `#121212` (Grafite ultraescuro que cria um contraste sutil e elegante).
    *   `--color-primary` (Acento Principal): `#D4AF37` (Dourado metálico escovado que evoca prestígio, sofisticação e remete ao conceito do "Extremo Oriente").
    *   `--color-text-main` (Texto Principal): `#F4F4F0` (Marfim/Ivory, evitando o branco puro para suavizar a leitura em telas escuras).
    *   `--color-text-muted` (Texto Secundário): `#A0A09A` (Cinza quente que mantém excelente legibilidade e hierarquia).
*   **Tipografia (Elegância Tradicional & Praticidade Inovadora):**
    *   **Títulos/Headlines (`h1` a `h4`):** `Domine` (Google Fonts). Uma fonte serifada robusta e tradicional, inspirando autoridade, credibilidade e solidez.
    *   **Corpo de Texto/Interface:** `DM Sans` (Google Fonts). Uma fonte sans-serif geométrica moderna, limpa e altamente legível para fluxo de leitura contínuo.
*   **Bordas e Elementos Visuais:**
    *   `--radius-standard`: `8px` (`0.5rem`). Cantos arredondados equilibrados e modernos.
    *   **Bordas de Cartões:** Linhas douradas translúcidas com efeito *glassmorphism* (`rgba(212, 175, 55, 0.15)`) que respondem ao foco e hover com brilhos suaves.

---

## ⚙️ Arquitetura de Seções da Página

A Landing Page foi estruturada seguindo as melhores práticas de conversão e fluxo de leitura de marketing (AIDA — Atenção, Interesse, Desejo, Ação):

1.  **Cabeçalho/Navbar:** Logotipo estilizado da Imobiliária Extremo Oriente com ícone oriental minimalista em SVG incorporado, links de navegação acessíveis e botão CTA de download.
2.  **Hero Section:** Apresentação de alto impacto visual ("O Extremo Oriente da Moradia de Luxo no seu Bolso") combinada com botões oficiais de download customizados para iOS (App Store) e Android (Google Play), além do mockup realista do aplicativo (`assets/app_mockup.png`).
3.  **Social Proof Bar:** Linha contendo métricas rápidas de credibilidade (Imóveis ativos, índice de satisfação e suporte 24h).
4.  **Recursos do Aplicativo (Grid de Destaques):** Grid de 4 cartões *glassmorphic* interativos apresentando os diferenciais tecnológicos da imobiliária (Catálogo Curado, Busca Avançada, Agendamento Automatizado e Assinatura Digital).
5.  **Showcase de Curadoria:** Painel focado na narrativa de curadoria física de imóveis sofisticados acompanhado da imagem arquitetônica real de um arranha-céus premium (`assets/luxury_apartment.png`).
6.  **Depoimentos e Avaliações (Credibilidade):** Grade de avaliações reais e verificadas de clientes de locação e compra, utilizando as estrelas douradas de prestígio para construir confiança.
7.  **Final CTA Block:** Caixa de conversão final imersiva com brilho dourado e bordas pulsantes para incentivar a ação de download imediata.
8.  **Footer (Rodapé):** Links de governança corporativa, política de privacidade, endereço físico de prestígio e informações do CRECI.

---

## ♿ Conformidade com Acessibilidade (A11y) e UX

Desenvolvida estritamente de acordo com as diretrizes do **Vercel Web Interface Guidelines**:

*   **HTML Semântico:** Uso rigoroso de tags nativas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote`, `<footer>`) para correta compreensão por leitores de tela.
*   **Skip Link:** Inclusão de atalho invisível no topo da página para permitir que usuários de teclado saltem a navegação diretamente para o conteúdo principal (`#main-content`).
*   **Foco Visível Integrado:** Todos os elementos interativos possuem estilo próprio e contrastante ao receberem foco de navegação por teclado via `:focus-visible` (evitando anéis de foco indesejados ao clicar).
*   **Uso de ARIA:** Botões de ícones e botões de download possuem atributos descritivos `aria-label` claros. Elementos puramente visuais e decorativos (como as estrelas de avaliação e ícones dos cards) possuem `aria-hidden="true"` para evitar poluição auditiva.
*   **Respeito a Preferências do Usuário:** Folha de estilos configurada com media query `prefers-reduced-motion: reduce` que remove instantaneamente todas as animações, rotações e transições de layout caso o usuário tenha ativado a preferência de movimento reduzido no sistema operacional.
*   **Semântica de Links:** Utilização correta de `<a>` para navegação e âncoras locais, e `<button>` apenas para ações interativas de controle de tela (como o menu hamburguer mobile).

---

## 🔒 Segurança e Melhores Práticas

Construído de acordo com os padrões da skill `security-best-practices` do projeto:

*   **Evitando Sinks de DOM XSS:** A lógica do menu hamburguer mobile em Vanilla JavaScript manipula propriedades seguras do elemento (`style.display`, `setAttribute`) em vez de injetar strings via `innerHTML`, mitigando completamente o risco de injeções cross-site.
*   **Segurança de Redirecionamentos:** Links externos e âncoras de downloads utilizam apenas conexões seguras e destinos controlados, evitando falhas de navegação arbitrária (`javascript:`).
*   **Links Externos Seguros:** Links externos em redes sociais utilizam as tags necessárias para impedir ataques de sequestro de contexto de navegação.

---

## ⚡ Otimização de Performance

*   **Zero Cumulative Layout Shift (CLS):** Todas as tags de imagem (`<img>`) possuem atributos de largura (`width`) e altura (`height`) definidos explicitamente, permitindo que o navegador reserve a área exata da imagem antes do seu download ser finalizado, garantindo que o layout da página nunca sofra saltos repentinos de posição.
*   **Carregamento Inteligente de Imagens:** A imagem principal do topo (`app_mockup.png`) possui prioridade alta de carregamento (`fetchpriority="high"`), enquanto as imagens abaixo da dobra (como `luxury_apartment.png` e ícones sociais) utilizam carregamento tardio (`loading="lazy"`) para maximizar a velocidade de renderização inicial da página.
*   **Assets Otimizados:** Os arquivos na pasta `assets/` foram criados e compactados sob medida para entrega veloz:
    *   `assets/app_mockup.png` (Visualização da interface do aplicativo imobiliário premium).
    *   `assets/luxury_apartment.png` (Foto arquitetônica sofisticada sob iluminação ao entardecer).

---

## 🛠️ Como Visualizar o Projeto Localmente

Como a página foi desenvolvida com **HTML e CSS puros autônomos**, não há necessidade de instalação de dependências ou etapas pesadas de compilação.

1.  Clone este repositório em sua máquina:
    ```bash
    git clone https://github.com/seu-usuario/extremo-oriente-landing-page.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd extremo-oriente-landing-page
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência ou utilize uma extensão de servidor local (como *Live Server* do VS Code ou `npx serve .` no terminal).
