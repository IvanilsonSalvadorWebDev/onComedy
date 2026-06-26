export function Header(){

return `<header>
    <nav>
        <ul>
          <li class="logo-container">
            <a href="">
              <img src="/onComedy.svg" alt="onComedy Logo" class="logo-img">
            </a>
          </li>
        </ul>

        <!-- Links padrão do Desktop -->
        <ul id='nav-links'>
            <li>Home</li>
            <li>Contacto</li>
            <li>Login</li>
        </ul>

        <!-- Bloco de utilitários e ações do Header -->
        <div class="header-actions">
            <!-- Botão de Notificações (Sino Boxicons) -->
            <button class="header-icon-button" aria-label="Notificações">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path>
                </svg>
            </button>

            <!-- Botão do Carrinho (Saco de Compras Boxicons) -->
            <button class="header-icon-button" aria-label="Carrinho de compras">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM<header>
    <nav>
        <ul>
            <li class='logo'>onComedy</li>
        </ul>

        <!-- Links padrão do Desktop -->
        <ul id='nav-links'>
            <li>Home</li>
            <li>Contacto</li>
            <li>Login</li>
        </ul>

        <!-- Bloco de utilitários e ações do Header -->
        <div class="header-actions">
            <!-- Botão de Notificações (Sino Boxicons) -->
            <button class="header-icon-button" aria-label="Notificações">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path>
                </svg>
            </button>

            <!-- Botão do Carrinho (Saco de Compras Boxicons) -->
            <button class="header-icon-button" aria-label="Carrinho de compras">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
                </svg>
            </button>

            <!-- Botão de Menu Mobile padrão -->
            <button id='mobile' aria-label="Abrir menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></path>
                </svg>
            </button>
        </div>
    </nav>
</header>`


}
