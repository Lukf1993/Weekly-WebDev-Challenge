import mobileMenu from './mobileMenu';
import scrollTo from './slideTo';

function init() {
    mobileMenu();
    scrollTo();
}

document.addEventListener('ready', init());
