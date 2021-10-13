const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-list li');
    
    burger.addEventListener('click', () => {
        // Toggle Navigation
        nav.classList.toggle('nav-active');
        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navListFade 0.5s ease forwards ${index / 5 + .3}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

const dropdownContent = () => {
    const item = document.querySelector('a');
    const dropdown = document.querySelector('.dropdown');

    item.addEventListener('click', () => {
        item.classList.toggle('item-active');

        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
}

navSlide();
dropdownContent();