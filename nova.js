const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

const AnaliseBtn = document.getElementById('btn-analise');
const NovaBtn = document.getElementById('btn-nova');
const linkAtivo = document.querySelector(".active");
const primeiroLink = document.querySelector(".container a");

document.querySelectorAll(".sidebar a").forEach((botao) => {
    botao.addEventListener("click", function () {
        // Remove a classe 'active' de qualquer botão que tenha
        document.querySelectorAll(".sidebar a.active").forEach((el) => el.classList.remove("active"));
        
        // Adiciona a classe 'active' ao botão clicado
        this.classList.add("active");
    });
});