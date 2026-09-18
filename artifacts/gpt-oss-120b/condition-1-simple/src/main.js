import './style.css';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class="nav-container container">
      <a href="#" class="logo">
        <svg class="logo-svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
        <span class="logo-text">Imobiliária <span>Extremo Oriente</span></span>
      </a>
      <nav>
        <ul class="nav-menu">
          <li><a href="#features" class="nav-link">Recursos</a></li>
          <li><a href="#testimonials" class="nav-link">Depoimentos</a></li>
          <li><a href="#download" class="nav-link">Download</a></li>
        </ul>
      </nav>
      <a href="#download" class="nav-cta-btn">Baixar App</a>
    </div>
  </header>

  <section class="hero section-padding">
    <div class="container hero-grid">
      <div class="hero-title">
        <h1 class="hero-title">Encontre o <span>imóvel dos seus sonhos</span></h1>
        <p class="hero-desc">Explore centenas de opções de compra e aluguel com a Extremo Oriente.</p>
        <div class="download-buttons">
          <a href="#" class="download-btn">
            <svg class="download-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
            <span>App para Android</span>
          </a>
          <a href="#" class="download-btn">
            <svg class="download-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
            <span>App para iOS</span>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <!-- Placeholder image; can be replaced with real asset -->
        <img src="https://via.placeholder.com/400x600?text=App+Screenshot" alt="Screenshot do App" style="width:100%;border-radius:var(--radius-standard);"/>
      </div>
    </div>
  </section>

  <section id="features" class="features section-padding">
    <div class="container">
      <div class="section-header">
        <p class="section-subtitle">Por que escolher</p>
        <h2 class="section-title">Recursos incríveis</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon-box"><svg class="feature-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg></div>
          <h3 class="feature-card-title">Busca avançada</h3>
          <p class="feature-card-desc">Filtros detalhados por preço, localização, tipo e muito mais.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-box"><svg class="feature-icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2"/></svg></div>
          <h3 class="feature-card-title">Visitas virtuais</h3>
          <p class="feature-card-desc">Explore cada imóvel em 3D sem sair de casa.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon-box"><svg class="feature-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 22,22 2,22"/></svg></div>
          <h3 class="feature-card-title">Alertas personalizados</h3>
          <p class="feature-card-desc">Receba notificações quando novos imóveis aparecerem.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="testimonials section-padding">
    <div class="container">
      <div class="section-header">
        <p class="section-subtitle">Depoimentos</p>
        <h2 class="section-title">O que nossos clientes dizem</h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p class="testimonial-quote">"Encontrei o apartamento perfeito em menos de uma semana! O aplicativo é super intuitivo."</p>
          <div class="rating-stars">
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
          </div>
          <div class="testimonial-user">
            <div class="testimonial-avatar">A</div>
            <div>
              <p class="testimonial-name">Ana Silva</p>
              <p class="testimonial-role">Compradora</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-quote">"O processo de aluguel foi rápido e transparente, adorei o suporte ao cliente."</p>
          <div class="rating-stars">
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"/></svg>
          </div>
          <div class="testimonial-user">
            <div class="testimonial-avatar">J</div>
            <div>
              <p class="testimonial-name">João Pereira</p>
              <p class="testimonial-role">Locatário</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="download" class="final-cta section-padding">
    <div class="container">
      <div class="cta-box">
        <h2 class="cta-title">Baixe o app agora</h2>
        <p class="cta-desc">Disponível para Android e iOS. Não perca a oportunidade de encontrar seu próximo imóvel.</p>
        <div class="download-buttons">
          <a href="#" class="download-btn">
            <svg class="download-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
            <span>Android</span>
          </a>
          <a href="#" class="download-btn">
            <svg class="download-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>
            <span>iOS</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h3 class="footer-col-title">Imobiliária Extremo Oriente</h3>
        <p>© 2026 Todos os direitos reservados.</p>
      </div>
      <div>
        <h3 class="footer-col-title">Links</h3>
        <ul>
          <li><a href="#" class="footer-link">Home</a></li>
          <li><a href="#features" class="footer-link">Recursos</a></li>
          <li><a href="#download" class="footer-link">Download</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer-col-title">Contato</h3>
        <p>Email: contato@extremooriente.com</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-link">
        <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
      </div>
    </div>
  </footer>
`;
