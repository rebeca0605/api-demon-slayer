'use strict'

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('personagens').addEventListener('click', function () {
        window.location.href = './pagina2.html'
    })
})

const galeriaDePersonagens = document.getElementById('charactersGallery')
let currentPage = 1
const totalPages = 9
const elementsOnPage = 5

async function buscarPersonagens(pagina = 1) {

    const urlOriginal = `https://www.demonslayer-api.com/api/v1/characters?page=${pagina}`
    const urlProxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(urlOriginal)}`

    try {
        const response = await fetch(urlProxy)
        const personagens = await response.json()

        return personagens.content || personagens
    } catch (erro) {
        console.error('Erro ao buscar personagens:', erro)
        return []
    }
}

async function exibirPersonagens() {
    const characters = await buscarPersonagens(currentPage)

    galeriaDePersonagens.innerHTML = '' 

    const charactersPage = characters.slice(0, elementsOnPage)

    charactersPage.forEach(character => {
        const card = document.createElement('div')
        card.className = 'card'

        const capa = document.createElement('img')
        capa.src = character.img
        capa.alt = character.name

        const nome = document.createElement('p')
        nome.textContent = character.name

        card.appendChild(capa)
        card.appendChild(nome)
        galeriaDePersonagens.appendChild(card)
    })
}

// Eventos das setas já existentes
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        exibirPersonagens()
    } else {
        alert('Você já está na primeira página!')
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++
        exibirPersonagens()
    } else {
        alert('Você já está na última página!')
    }
})

exibirPersonagens()
