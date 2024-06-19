let personagemArr = [];

class Personagem {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
    }
}

function addNovoPersonagem() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("img").value;

    const personagemExistente = personagemArr.some(i => i.nome === title);

    if (personagemExistente) {
        alert('O personagem já foi salvo!');
    } else {
        personagemArr.push(new Personagem(title, description, image));
    
        // Converte o array de personagens para uma string JSON
        const personagemJSON = JSON.stringify(personagemArr);
    
        // Armazena a string JSON no localStorage
        localStorage.setItem('personagens', personagemJSON);
    }
}