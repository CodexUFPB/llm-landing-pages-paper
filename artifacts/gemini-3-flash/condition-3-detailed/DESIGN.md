# Imobiliária Extremo Oriente -- Sistema de Design (Premium & Luxo)

Este documento descreve as decisões de design, identidade de marca, tokens e componentes visuais implementados para a Landing Page de conversão do aplicativo móvel da **Imobiliária Extremo Oriente**.

---

## 💎 Conceito da Marca

A **Imobiliária Extremo Oriente** atua no mercado de corretagem de imóveis de altíssimo padrão (luxo e super-luxo). O aplicativo oficial oferece uma curadoria exclusiva de residências majestosas. 

Para atrair este público seleto, o design deve evocar:
- **Exclusividade:** Poucos elementos visuais, mas de altíssima qualidade.
- **Sofisticação:** Tipografia serifada clássica combinada com a precisão minimalista moderna.
- **Segurança e Confiabilidade:** Tons escuros profundos e contrastes luminosos de dourado que remetem a ouro e riqueza.

---

## 🎨 Design Tokens

### Cores

A paleta de cores é rigorosamente controlada para garantir a sobriedade e a sofisticação do produto, mantendo a conformidade com as regras de contraste de acessibilidade (WCAG).

| Token de Cor | Código Hex | Uso Primário | Justificativa |
| :--- | :--- | :--- | :--- |
| **Rich Obsidian** (Fundo) | `#0a0a0a` | Fundo principal da página e seções | Preto profundo que estabelece uma atmosfera cinematográfica e de luxo. |
| **Imperial Gold** (Primária) | `#D4AF37` | CTAs principais, botões ativos, cabeçalhos, destaques | O dourado metálico clássico que simboliza excelência e alto padrão. |
| **Solarian Yellow** (Destaque) | `#FFD700` | Estados de *hover*, foco ativo e ícones dinâmicos | Amarelo-ouro vivo para chamar a atenção em interações importantes. |
| **Antique Gold** (Borda/Secundária)| `#9A7B1C` | Bordas sutis, separadores, textos secundários | Dourado mais fechado para manter a sobriedade sem perder a identidade cromática. |
| **Alabaster White** (Texto Principal)| `#ffffff` | Títulos grandes e parágrafos de destaque | Branco puro para contraste absoluto e leitura cristalina sobre o fundo escuro. |
| **Platinum Silver** (Texto Corpo) | `#e5e7eb` | Parágrafos de leitura geral e legendas | Cinza claro sofisticado para suavizar a leitura sem cansar a visão do usuário. |

### Tipografia

O sistema tipográfico utiliza duas famílias tipográficas que se complementam harmoniosamente:

1. **Heading (Títulos - Cinzel / Playfair Display):**
   - **Família:** `'Cinzel', serif` ou `'Playfair Display', serif`
   - **Aplicação:** Logotipo, `<h1>`, `<h2>` e títulos de seções importantes.
   - **Estilo:** Letras maiúsculas discretas (*all caps*) para a Cinzel nos logotipos, conferindo robustez, herança histórica e imponência romana clássica.

2. **Body (Parágrafos e Ações - Inter):**
   - **Família:** `'Inter', sans-serif`
   - **Aplicação:** Textos de depoimentos, descrições de recursos (features), botões de download e links do menu.
   - **Estilo:** Extremamente legível, geométrico e moderno, excelente para telas retina de smartphones de última geração.

### Bordas e Formas (Shape Language)

- **Roundness:** `rounded-lg` (8px) e `rounded-2xl` (16px) para cards de depoimento e mockups. O uso de cantos levemente arredondados, sem exagero, confere sofisticação técnica e suavidade moderna, evitando o visual excessivamente pontiagudo ou infantilizado (redondo demais).
- **Sombras:** Sombras com efeitos de difusão de luz dourada ativa (`box-shadow: 0 0 15px rgba(212, 175, 55, 0.15)`).

---

## 📱 Responsividade (Mobile-First)

Como o principal objetivo é a conversão em download de aplicativo de smartphone:
- O layout é concebido de baixo para cima (começando pelas menores telas).
- Os botões das lojas de aplicativos (**App Store** e **Google Play**) são posicionados em destaque centralizado na dobra inicial nos smartphones.
- O mockup do smartphone é otimizado para preencher o espaço lateral em telas grandes e deslizar elegantemente abaixo do texto de conversão em telas verticais (mobile).

---

## ⚡ Efeitos de Micro-animações e Interatividade

- **Hover Actives:** Todos os botões primários têm uma transição de transformação suave (`transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]`).
- **Cards de Avaliação:** Leve elevação no eixo Z e bordas douradas que se acendem sutilmente quando o mouse passa por cima.
