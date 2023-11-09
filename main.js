var navContainer = document.querySelector('.navbar');

document.addEventListener('scroll', function() {
    if (window.scrollY < 75) {
        navContainer.classList.remove('nav-action');
    } else {
        navContainer.classList.add('nav-action')
    }
});