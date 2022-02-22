const allButons = document.querySelectorAll("input"); // pega do html todos os inputs/botoes

allButons.forEach(button => button.addEventListener('click', (e) => {
    clearActiveButton();
    e.target.classList.add('active');
}));

const clearActiveButton = () => allButons.forEach(button => button.classList.remove('active'));
