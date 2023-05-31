const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});


// Navbar
const hambarger = document.querySelector(".fa-bars"),
    menu = document.querySelector(".menu"),
    close_nav = document.querySelector('.fa-times');

hambarger.addEventListener("click", () => {
    menu.classList.add("show");
});

close_nav.addEventListener('click', () => {
    if (menu.classList.contains('show'))
        menu.classList.remove("show");
});