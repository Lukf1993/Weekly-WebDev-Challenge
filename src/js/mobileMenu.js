export default () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const body = document.querySelector('body');

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("change");
        menu.classList.toggle('header__nav--mobile');
        body.classList.toggle('overflow');
    }
}