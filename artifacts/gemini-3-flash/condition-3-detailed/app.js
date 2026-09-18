/* --------------------------------------------------
   Imobiliária Extremo Oriente - Lógica do Aplicativo
   -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar os Ícones Lucide com segurança
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Efeito dinâmico no Header ao rolar a página
  const header = document.querySelector('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-black/95', 'shadow-lg');
      header.classList.remove('bg-dark-bg/80');
    } else {
      header.classList.add('bg-dark-bg/80');
      header.classList.remove('bg-black/95', 'shadow-lg');
    }
  };

  // Otimização de scroll por meio de throttling sutil
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 100);
    }
  });

  // Executar uma vez no carregamento inicial
  handleScroll();

  // 3. Tratamento Seguro contra Vulnerabilidades de Navegação (JS-URL-001)
  // Interceptar cliques nos CTAs das lojas virtuais de aplicativos para fins de simulação e rastreamento seguro
  const storeButtons = document.querySelectorAll('a[href="#"]');
  storeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      
      const ariaLabel = button.getAttribute('aria-label') || 'Botão de download';
      
      // Sanitização rígida de saída - Evita qualquer DOM Injection (Sink XSS)
      // Criamos os elementos usando APIs nativas seguras como textContent e createElement
      showFeedbackToast(`Iniciando simulação de download: ${ariaLabel}`);
    });
  });

  // 4. Criação de Componentes Dinâmicos e Sanitização (Prevenção contra JS-XSS-001)
  function showFeedbackToast(message) {
    // Remover toast anterior se existir
    const existingToast = document.getElementById('feedback-toast');
    if (existingToast) {
      existingToast.remove();
    }

    // Criar o container do toast sutil e luxuoso (Glassmorphism + Ouro)
    const toast = document.createElement('div');
    toast.id = 'feedback-toast';
    toast.className = 'fixed bottom-5 right-5 z-50 px-6 py-4 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] border border-gold-dark/40 bg-black/90 backdrop-blur-md text-white font-sans text-xs flex items-center space-x-3 transition-all duration-300 transform translate-y-10 opacity-0';
    
    // Configurar leitor de tela (Acessibilidade - live alert)
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    // Ícone de confirmação
    const icon = document.createElement('span');
    icon.className = 'text-gold-primary text-base font-bold';
    icon.textContent = '💎';
    toast.appendChild(icon);

    // Texto da mensagem - Uso estrito de textContent para evitar XSS
    const textNode = document.createElement('span');
    textNode.className = 'font-medium tracking-wide';
    textNode.textContent = message;
    toast.appendChild(textNode);

    // Adicionar ao corpo da página de forma segura
    document.body.appendChild(toast);

    // Animar entrada (Compositor-friendly transform/opacity)
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-10', 'opacity-0');
    });

    // Remover automaticamente após 4 segundos
    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }
});
