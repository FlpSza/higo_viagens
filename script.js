// Função para gerenciar o desaparecimento do Top Header ao rolar
const topHeader = document.querySelector('.top-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        topHeader.classList.add('hidden'); // Esconde o header
    } else {
        topHeader.classList.remove('hidden'); // Mostra o header
    }
    lastScrollY = window.scrollY;
});

// Alternar abas no Card de Pesquisa
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
