'use strict'

// pegar personagem do localStorage
const personagem = JSON.parse(localStorage.getItem("personagemSelecionado"))

if (personagem) {
    mostrarDetalhes(personagem);
} else {
    console.error("Nenhum personagem encontrado no localStorage");
}

function mostrarDetalhes(personagem) {
    document.getElementById('imagem').src = personagem.img
    document.getElementById('quote').textContent = personagem.quote
    document.getElementById('nome').textContent = personagem.name
    document.getElementById('idade').textContent = personagem.age
    document.getElementById('genero').textContent = personagem.gender
    document.getElementById('raca').textContent = personagem.race
    document.getElementById('descricao').textContent = personagem.description
}