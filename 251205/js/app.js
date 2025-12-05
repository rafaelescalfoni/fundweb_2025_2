
let paises = []
let paisesFiltrados = []
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

    paises = dados
    paisesFiltrados = paises
}

carregarPaises() //destructing

// [["Brasil", "Argentina", "Uruguai"]] //errado
// precisa "desestruturar" antes
//(... ["Brasil", "Argentina", "Uruguai"]) => "Brasil", "Argentina", "Uruguai"


/**
 * Função que filtra países por nome
 * @param {*} palavra - chave de busca
 */
const buscarPorNome = (palavra) => {

    const fragMinusculo = palavra.toLowerCase()

    return paisesFiltrados.filter(pais => {
        const nomePaisMinusculo = pais.name.common.toLowerCase()
        return nomePaisMinusculo.includes(fragMinusculo) 
    })
}

/**
 * Função que filtra países por regiao
 * @param {*} palavra - chave de busca
 */
const buscarPorRegiao = (palavra) => 
    paises.filter(pais => 
        pais.region.toLowerCase().includes(palavra.toLowerCase())
    )


const iptCampoBusca = document.querySelector("#campoBusca")

iptCampoBusca.addEventListener("keyup", async () => {
    //recebe a palavra de busca
    const palavra = iptCampoBusca.value
    
    //chamar a função que filtra
    paisesFiltrados = buscarPorNome(palavra)

    //exibir os paises
    exibirPaises(paisesFiltrados)
})

const ordenarPorNome = () => {
    paisesFiltrados = paises.sort((p1, p2) => p1.name.common > p2.name.common)
    exibirPaises(paisesFiltrados)
}
/*


ordenarPorPopulacao()

ordenarPorArea()
*/


/*
 * comandos de tela 
 */

const btnOrdenarNome = document.querySelector("#btnOrdenarNome")
const btnOrdenarPopulacao = document.querySelector("#btnOrdenarPopulacao")
const btnOrdenarArea = document.querySelector("#btnOrdenarArea")
const selectBuscaRegiao = document.querySelector("#filtroRegiao")

btnOrdenarNome.addEventListener("click", ordenarPorNome)

btnOrdenarPopulacao.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por populacao")
})

btnOrdenarArea.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por area")
})

selectBuscaRegiao.addEventListener("click", ()=>{

    paisesFiltrados = buscarPorRegiao(selectBuscaRegiao.value)
    //carregar os paises
    exibirPaises(paisesFiltrados)
})