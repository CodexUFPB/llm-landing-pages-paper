# Imobiliária Extremo Oriente – Landing Page

## Descrição
Landing page premium destinada a promover o download do aplicativo da Imobiliária Extremo Oriente. Design em preto e dourado, com hero image, catálogo de imóveis, avaliações e chamadas para ação.

## Tecnologias
- **HTML5** – estrutura semântica.
- **CSS3** – variáveis custom properties, flexbox, grid, animações.
- **JavaScript (ES6+)** – scroll suave e animações de fade‑in.
- **Google Fonts – Inter** – tipografia moderna.
- **Serve (npm script)** – servidor estático para desenvolvimento local.

## Estrutura de Pastas
```
LandingPage5/
├─ assets/                # imagens usadas na página
│   └─ hero_background.png
├─ index.html             # página principal
├─ style.css              # estilos globais e variáveis de cores
├─ script.js              # comportamentos de UI simples
└─ README.md              # este documento
```

## Scripts npm
```bash
npm run dev   # Inicia um servidor estático local (porta padrão 3000)
```

O script `dev` está definido em **package.json** como `"npx -y serve ."`.

## Como Executar
1. Clone o repositório.
2. Instale as dependências (apenas Node para o script de serve):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador em `http://localhost:3000` ou acesse diretamente o arquivo `index.html`.

## SEO
- `<title>`: Imobiliária Extremo Oriente – Seu próximo imóvel está aqui
- `<meta name="description">`: Catálogo de imóveis à venda e locação. Baixe nosso app para encontrar o imóvel ideal.
- `<meta charset="UTF-8">` e viewport responsivo.

## Acessibilidade
- Contraste adequado entre texto dourado e fundo preto (WCAG AA).
- Texto alternativo (`alt`) em todas as imagens.
- Navegação por teclado suportada.

## Licença
Este código é fornecido como exemplo e pode ser usado livremente.
