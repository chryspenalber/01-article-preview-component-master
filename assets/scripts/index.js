const shareButton = document.getElementById('share-button');
const shareBalloon = document.getElementById('share-balloon');
const shareContainer = document.querySelector('.share-container');

// Alternar a exibição do balão ao clicar no botão
shareButton.addEventListener('click', () => {
    shareBalloon.classList.toggle('hidden');
});

// Fechar o balão ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!shareContainer.contains(event.target)) {
        shareBalloon.classList.add('hidden');
    }
});



