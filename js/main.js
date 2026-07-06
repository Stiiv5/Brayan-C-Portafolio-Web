/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    // === 1. LÓGICA DE CAMBIO DE IDIOMA (EN / ES) ===
    const langToggleBtn = document.getElementById('lang-toggle');
    const translatableElements = document.querySelectorAll('[data-es]');
    let currentLang = 'es'; // Idioma inicial por defecto

    langToggleBtn.addEventListener('click', () => {
        // Alternamos el idioma actual
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        // Actualizamos el texto del botón de idioma
        langToggleBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        
        // Cambiamos el atributo lang en el HTML para accesibilidad y SEO
        document.documentElement.lang = currentLang;

        // Recorremos todos los elementos traducibles e inyectamos el texto correspondiente
        translatableElements.forEach(element => {
            const textToInject = element.getAttribute(`data-${currentLang}`);
            if (textToInject) {
                element.textContent = textToInject;
            }
        });
    });

    // === 2. LÓGICA DE MODO OSCURO / MODO CLARO ===
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verificamos si el usuario ya tenía una preferencia guardada anteriormente
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        // Añade o quita la clase .light-mode al body
        document.body.classList.toggle('light-mode');
        
        // Cambiamos el icono según el estado actual
        if (document.body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'light'); // Guardamos preferencia
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'dark');  // Guardamos preferencia
        }
    });
});

// Ocultar indicador de scroll cuando el usuario baje la pantalla
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
            scrollIndicator.style.transition = 'opacity 0.4s ease, visibility 0.4s';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    }
});