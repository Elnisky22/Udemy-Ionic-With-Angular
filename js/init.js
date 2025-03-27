//--Menu Scroll Fixed--------------------//

function menuFixedOnScroll() {
    const nav = document.querySelector('#header'),
        main = document.querySelector('main');
    let navHeight = outerHeight(nav),
        windowTop = window.pageYOffset || document.body.scrollTop;

    if (windowTop > navHeight) {
        if (!nav.classList.contains('nav-scrolled')) {
            main.style.paddingTop = navHeight + 'px';
        }
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
        main.style.paddingTop = 0;
    }
}

window.addEventListener('load', menuFixedOnScroll);
window.addEventListener('scroll', menuFixedOnScroll);

//--Scroll Top Button--------------------//

const buttonScrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
        buttonScrollTop.classList.add('active');
    } else {
        buttonScrollTop.classList.remove('active');
    }
});

buttonScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

//--Live Filter--------------------------//

//eslint-disable-next-line
const searchInput = document.querySelector('#search');
const listItems = document.querySelectorAll('#list li');

searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toUpperCase();

    listItems.forEach(function(item) {
        const text = item.textContent || item.innerText;
        if (text.toUpperCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

//--Dark Theme---------------------------//

const body = document.querySelector('body');
const darkTheme = document.querySelector('#dark-theme');

if (document.cookie.indexOf('theme=dark-theme') === 0) {
    body.classList.add('dark-theme');
    darkTheme.disabled = false;
}

//eslint-disable-next-line
function toggleDarkLight() {
    if (document.cookie.indexOf('theme=index-dark-theme') === -1) {
        body.classList.add('dark-theme');
        document.cookie = 'theme=index-dark-theme';
        darkTheme.disabled = false;
    } else {
        document.cookie = 'theme=;';
        body.classList.remove('dark-theme');
        darkTheme.disabled = true;
    }
}

