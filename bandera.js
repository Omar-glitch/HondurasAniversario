// Listas del header Animacion:v
const lista = document.querySelector('.list-header');
const button = document.querySelector('#barras');
const shadow = document.getElementById('shadow')
let papelHigienico = true;

const open_menu = () => {
    lista.style.left = 0;
    papelHigienico = false;
    shadow.style.visibility = "visible";
}

const close_menu = () => {
    lista.style.left = '-18.75rem';
    papelHigienico = true;
    shadow.style.visibility = "hidden";
}

button.addEventListener('click', () => {
    if (papelHigienico) open_menu();
    else close_menu();
})

// HeaderAnimacion :v
let posicionAnterior = window.scrollY;
const header = document.querySelector('#header');

const scroll = () => {
    let posicionActual = window.scrollY;
    if (posicionAnterior > posicionActual) header.style.top = "0";
    else header.style.top = "-3.4375rem";
    posicionAnterior = posicionActual;

    if (posicionActual > 30) header.style.background = "var(--white)";
    else header.style.background = "transparent";
}

const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const is_less = width - (width / 7);
    if (is_less > height) {
        if (!papelHigienico) close_menu();
    }
}

const click = (e) => {
    if (papelHigienico) return;
    if (button.contains(e.target)) return;
    if (lista.contains(e.target)) return;
    close_menu();
}

window.addEventListener('scroll', scroll)
window.addEventListener('resize', resize);
window.addEventListener('click', click);

//Enlaces y navegacion izquierda
const links = document.querySelectorAll('.list-header li a');

links.forEach((link) => {
    link.addEventListener('click', close_menu);
});
