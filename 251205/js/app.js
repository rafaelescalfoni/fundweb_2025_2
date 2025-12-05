

//parametro: ?fields=param => ?fields=name


/**
 * Função que exibe a lista de paises recuperados na tela
 * @param {*} lista - relação de países que satisfaz alguma condição
 */
const exibirPaises = lista => {
    const listaPaises = document.querySelector("#listaPaises")

    const cards = lista.reduce((acum, pais) => {
        const card = `<div class="pais" onclick="detalhesPais('${pais.name.common}')">
            <img src="${pais.flag.png}" alt="bandeira">
            <h3>${pais.name.common}</h3>
            <p><strong>Capital:</strong>${pais.capital}</p>
            <p><strong>População:</strong>${pais.population}</p>
            </div>`
        return acum + card
    },"")
    listaPaises.innerHTML = cards
}

/**
 * Função que retorna todos os paises disponibilizados pela API
 * @returns array com  todos os paises
 */
const carregarPaises = async () => {
    const url = "https://restcountries.com/v3.1/all?fields=name,area,currency,capital,region,subregion,lang,population,flag"

    // 1. estabelecer uma conexao e recuperar a promise
    const resposta = await fetch(url)

    // 3. carregar os dados da promises
    const dados = await resposta.json()

    return dados
}

const paises = carregarPaises()


/**
 * Função que filtra países por nome
 * @param {*} palavra - chave de busca
 * @param {*} paises - lista completa de paises a ser filtrada
 */
const buscarPorNome = (palavra, paises) => {

    const fragMinusculo = palavra.toLowerCase()

    return paises.filter(pais => {
        const nomePaisMinusculo = pais.name.common.toLowerCase()
        return nomePaisMinusculo.includes(fragMinusculo) 
    })
}

const iptCampoBusca = document.querySelector("#campoBusca")

iptCampoBusca.addEventListener("keyup", async () => {
    //recebe a palavra de busca
    const palavra = iptCampoBusca.value
    
    //carregar os paises
    const paises = await carregarPaises()

    //chamar a função que filtra
    const paisesFiltrados = buscarPorNome(palavra, paises)

    //exibir os paises
    exibirPaises(paisesFiltrados)
})

/*
ordenarPorNome()

ordenarPorPopulacao()

ordenarPorArea()
*/


/*
 * comandos de tela 
 */

const btnOrdenarNome = document.querySelector("#btnOrdenarNome")
const btnOrdenarPopulacao = document.querySelector("#btnOrdenarPopulacao")
const btnOrdenarArea = document.querySelector("#btnOrdenarArea")


btnOrdenarNome.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por nome")
})

btnOrdenarPopulacao.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por populacao")
})

btnOrdenarArea.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por area")
})