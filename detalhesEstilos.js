// pegar estilo selecionado do localStorage 
const estilo = JSON.parse(localStorage.getItem("estiloSelecionado"))

if (estilo) {
    mostrarDetalhesEstilo(estilo)
} else {
    console.error("Nenhum estilo encontrado no localStorage")
}

function mostrarDetalhesEstilo(estilo) {
    document.getElementById('img').src = estilo.img
    document.getElementById('name').textContent = estilo.name
    document.getElementById('descricao-estilo').textContent = estilo.description
    
    const lista = document.getElementById('charactersList')
    lista.innerHTML = ""

    estilo.combat_style_character.forEach(personagem => {
        const li = document.createElement("li")
        li.textContent = personagem.name 
        lista.appendChild(li)
    })
}
