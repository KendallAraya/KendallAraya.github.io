let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Agrega un evento click al botón
document.getElementById('openCurriculumBtn').addEventListener('click', function() {
// Abre tu currículum en una nueva ventana o pestaña
window.open('../KendallArayaCurriculumIngles.pdf', '_blank');
});


document.getElementById('openRefereceBtn').addEventListener('click', function() {
window.open('../Reference.pdf', '_blank');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}




