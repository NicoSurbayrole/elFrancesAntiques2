function scrollControlado() {    
    const links = document.querySelectorAll('.navbar__link, .navbar__link--remate, .footer__list-link a, a[href^="#"]');
    const headerNav = document.querySelector('.header-nav');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // 1. Cálculos de distancias físicas
                    const navbarHeight = headerNav ? headerNav.offsetHeight : 60;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                    const margenDeAire = 5;
                    const positionFinal = targetPosition - navbarHeight - margenDeAire;

                    // 2. Parámetros de la animación personalizada
                    const startPosition = window.scrollY;
                    const distance = positionFinal - startPosition;
                    let startTime = null;

                    // DURACIÓN: 1000 milisegundos (1 segundo total de viaje suave)
                    const duration = 900;

                    // 3. Función matemática de suavizado (Curva EaseInOut Quad)
                    // Hace que empiece lento, acelere en el medio y frene con suavidad al llegar
                    function easing(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }

                    // 4. El motor de la animación cuadro por cuadro
                    function animation(currentTime) {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;

                        // Calculamos el punto exacto de scroll para este milisegundo
                        const run = easing(timeElapsed, startPosition, distance, duration);

                        window.scrollTo(0, run);

                        // Si no ha terminado el tiempo de la animación, pide el siguiente cuadro
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        } else {
                            // Ajuste final perfecto al terminar
                            window.scrollTo(0, positionFinal);
                        }
                    }

                    // Lanzamos el scroll fluido controlado cuadro por cuadro
                    requestAnimationFrame(animation);
                }
            }
        });
    });
}

// Inicialización segura de la escucha
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollControlado);
} else {
    scrollControlado();
}

