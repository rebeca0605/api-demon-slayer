'use strict'

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');

    if (characterId) {
        const characterDetails = await buscarDetalhesDoPersonagem(characterId);

        if (characterDetails) {
            exibirDetalhesDoPersonagem(characterDetails);
        }
    }
});

async function buscarDetalhesDoPersonagem(id) {
    const urlOriginal = `https://www.demonslayer-api.com/api/v1/characters/${id}`;

    try {
        const response = await fetch(urlOriginal); 
        const data = await response.json();

        // A API de detalhes retorna um único objeto, não um array.
        return data;
    } catch (error) {
        console.error('Erro ao buscar detalhes do personagem:', error);
        return null;
    }
}

function exibirDetalhesDoPersonagem(character) {

    document.getElementById('imagem').src = character.img;
    document.getElementById('imagem').alt = character.name;
    document.getElementById('nome').textContent = character.name;
    document.getElementById('quote').textContent = `"${character.quote}"`;
    document.getElementById('idade').textContent = ` ${character.age}`;
    document.getElementById('genero').textContent = ` ${character.gender}`;
    document.getElementById('raca').textContent = ` ${character.race}`;
    document.getElementById('descricao').textContent = character.description;
}