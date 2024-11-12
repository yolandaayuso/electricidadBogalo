document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for buttons
    nextButton.addEventListener('click', () => {
        clearInterval(autoPlayInterval); // Pausar autoplay al hacer clic
        nextSlide();
        startAutoPlay(); // Reiniciar autoplay después del clic
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoPlayInterval); // Pausar autoplay al hacer clic
        prevSlide();
        startAutoPlay(); // Reiniciar autoplay después del clic
    });

    // Auto-play function
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos
    }

    // Start auto-play on load
    startAutoPlay();
    showSlide(currentSlide); // Mostrar la primera diapositiva al cargar la página
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar-menu a'); // Selecciona todos los enlaces del menú

    // Alternar la visibilidad del menú cuando se hace clic en el ícono de hamburguesa
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquiera de los enlaces
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active'); // Cierra el menú
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in-up');

    const appearOptions = {
        threshold: 0.5, // Cambia este valor según prefieras
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("visible");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
