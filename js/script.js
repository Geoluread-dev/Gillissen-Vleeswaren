document.onreadystatechange = () => {
    const preloader = document.querySelector('.preloader');

    if(document.readyState === 'complete') {
        preloader.classList.add('preloader-done');
    }
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-list li');
    
    burger.addEventListener('click', () => {
        // Toggle Navigation
        nav.classList.toggle('nav-active');
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

navSlide();