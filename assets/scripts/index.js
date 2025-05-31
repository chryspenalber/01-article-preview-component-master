const shareButton = document.getElementById('share-button');
const shareBalloon = document.getElementById('share-balloon');
const shareContainer = document.querySelector('.share-container');

// Mostrar o balão ao passar o mouse no botão
shareButton.addEventListener('mouseenter', () => {
    shareBalloon.classList.remove('hidden');
});

// Esconder o balão quando o mouse sair da área do botão + balão
shareContainer.addEventListener('mouseleave', () => {
    shareBalloon.classList.add('hidden');
});

const hideTestimony = document.getElementById('hide-testimony');

// Esconder o testemunho ao clicar no botão
hideTestimony.addEventListener('click', () => {
    const testimony = document.querySelector('.testimony');
    if (testimony) {
        testimony.classList.add('hidden');
    }
});

// Esconder o testemunho ao clicar no botão de compartilhar
shareButton.addEventListener('click', () => {
    const testimony = document.querySelector('.testimony');
    if (testimony) {
        testimony.classList.add('hidden');
    }
});