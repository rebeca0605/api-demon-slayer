'use strict'

const personagensCard = document.getElementById('personagens');
const estilosCard = document.getElementById('estilos');

if (personagensCard) {
    personagensCard.addEventListener('click', function () {
        window.location.href = './pagina2.html';
    });
}

if (estilosCard) {
    estilosCard.addEventListener('click', function () {
        window.location.href = './pagina4.html';
    });
}

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

        return personagens.content
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

        card.addEventListener('click', () => {
            localStorage.setItem("personagemSelecionado", JSON.stringify(character));

            window.location.href = "pagina3.html";
        });


        card.appendChild(capa)
        card.appendChild(nome)
        galeriaDePersonagens.appendChild(card)
    })
}


if (galeriaDePersonagens) {
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            exibirPersonagens();
        } else {
            alert('Você já está na primeira página!');
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            exibirPersonagens();
        } else {
            alert('Você já está na última página!');
        }
    });

    exibirPersonagens();
}


const galeriaDeEstilos = document.getElementById('stylesGallery')
let pageCurrent = 1
const pagesTotal = 9
const elementsOnPages = 5

async function buscarEstilos(pagina = 1) {

    const urlOriginal = `https://www.demonslayer-api.com/api/v1/combat-styles?page=${pagina}`
    const urlProxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(urlOriginal)}`

    try {
        const response = await fetch(urlProxy)
        const estilos = await response.json()

        return estilos.content
    } catch (erro) {
        console.error('Erro ao buscar personagens:', erro)
        return []
    }
}

async function exibirEstilos() {
    const styles = await buscarEstilos(pageCurrent)

    galeriaDeEstilos.innerHTML = ''

    const stylesPages = styles.slice(0, elementsOnPages)

    stylesPages.forEach(style => {  
        const card = document.createElement('div')
        card.className = 'card'

        const capa = document.createElement('img')
        capa.src = style.img
        capa.alt = style.name

        const nome = document.createElement('p')
        nome.textContent = style.name

        card.addEventListener('click', () => {
            localStorage.setItem("estiloSelecionado", JSON.stringify(style));

            window.location.href = "pagina5.html";
        });

        card.appendChild(capa)
        card.appendChild(nome)
        galeriaDeEstilos.appendChild(card)
    })
}


if (galeriaDeEstilos) {
    document.getElementById('pagePrev').addEventListener('click', () => {
        if (pageCurrent > 1) {
            pageCurrent--;
            exibirEstilos();
        } else {
            alert('Você já está na primeira página!');
        }
    });

    document.getElementById('pageNext').addEventListener('click', () => {
        if (pageCurrent < pagesTotal) {
            pageCurrent++;
            exibirEstilos();
        } else {
            alert('Você já está na última página!');
        }
    });

    exibirEstilos();
}

if (galeriaDeEstilos) {

    exibirEstilos();
}