export function error(){

return `<div class="error-container">
  <div class="error-glow"></div>
  <svg xmlns="http://w3.org" viewBox="0 0 24 24" class="modern-error-svg">
    <!-- Fundo do ecrã de cinema / moldura abstrata -->
    <rect x="2" y="4" width="20" height="16" rx="4" class="bg-shape" />
    
    <!-- Linhas que simulam conteúdo em falta (esqueleto/placeholder desvanecido) -->
    <line x1="6" y1="14" x2="12" y2="14" class="line-placeholder" />
    <line x1="6" y1="10" x2="10" y2="10" class="line-placeholder" />
    
    <!-- Sinal de Alerta Moderno (Minimalista) -->
    <circle cx="17" cy="10" r="1.5" class="alert-dot" />
    <line x1="17" y1="13" x2="17" y2="15" class="alert-line" />
  </svg>
  <h3 class="error-title">Sem filmes por aqui</h3>
  <p class="error-subtitle">Não conseguimos encontrar nenhum título. Tente novamente mais tarde.</p>
</div>
`
}
