
let paises = []
let paisesFiltrados = []

/**
 * Função que retorna todos os paises disponibilizados pela API
 * @returns array com  todos os paises
 */
const carregarPaises = async () => {
    const url = "https://restcountries.com/v3.1/all?fields=name,area,currency,capital,region,subregion,lang,population,flag"

    // 1. estabelecer uma conexao e recuperar a promise
    const resposta = await fetch(url)

    // 2. carregar os dados da promises
    const dados = await resposta.json()

    paises = dados
    paisesFiltrados = paises
}

carregarPaises() //destructing

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


const ordenarPorNome = () => {
    paisesFiltrados = paisesFiltrados.sort((p1, p2) => p1.name.common > p2.name.common)
    exibirPaises(paisesFiltrados)
}

const ordenarPorPopulacao = () => {
    paisesFiltrados = paisesFiltrados.sort((p1, p2) => p1.population > p2.population)
    exibirPaises(paisesFiltrados)
}

const ordenarPorArea = () => {
    paisesFiltrados = paisesFiltrados.sort((p1, p2) => p1.area > p2.area)
    exibirPaises(paisesFiltrados)
}

/**
 * Função utilitária que recupera o nome do país pelo card
 * Estrutura utilizada (se alterar a estrutura do card, precisa alterar a função):
 * div
 *  - h1
 *  - h3
 *  - p
 *   -- strong
 * @param {*} elemClicado 
 * @returns string com o nome comum do país
 */
const recuperaNomePais = (elemClicado) => {
    //função interna
    const buscaH3 = divPai => {
        for(elemFilho of divPai.children) {
            if(elemFilho.tagName == "H3")
                return elemFilho.textContent 
        }
    }

    if(elemClicado.tagName == "DIV") return buscaH3(elemClicado)    
    else if(elemClicado.tagName == "H3" 
            || elemClicado.tagName == "H1" 
            || elemClicado.tagName == "P") return buscaH3(elemClicado.parentNode) // elemento pai do H3
    
    else  return buscaH3(elemClicado.parentNode.parentNode) // STRONG ESTÁ A DOIS NIVEIS DO DIV

}


/**
 * Função que exibe a lista de paises recuperados na tela
 * @param {*} lista - relação de países que satisfaz alguma condição
 */
const exibirPaises = lista => {
    const listaPaises = document.querySelector("#listaPaises")

    const cards = lista.reduce((acum, pais) => {
        const card = `<div class="pais">
            <h1>${pais.flag}</h1>
            <h3>${pais.name.common}</h3>
            <p><strong>Capital:</strong> ${pais.capital}</p>
            <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>
            </div>`
        return acum + card
    },"")
    listaPaises.innerHTML = cards

    exibirEstatisticas()
}

/**
 * Função que exibe a estatísticas dos países filtrados
 *
 */
const exibirEstatisticas = () => {
    const areaTotal = paisesFiltrados.reduce((acum, pais) => acum+pais.area,0)
    const populacaoTotal = paisesFiltrados.reduce((acum, pais) => acum+pais.population,0)
    const totalPaisesExibidos = paisesFiltrados.length

    const estatisticasHTML = document.querySelector("#estatisticas")

    estatisticasHTML.innerHTML = `<h2>Estatísticas</h2>
    <p><strong>Total de países exibidos: </strong>${totalPaisesExibidos}</p>
    <p><strong>População total: </strong>${populacaoTotal.toLocaleString()}</p>
    <p><strong>Área total: </strong>${areaTotal.toLocaleString()}</p>`

}

/**
 * Função que exibe detalhes de um país
 * @param {*} nomePais 
 */
const exibirDetalhes = nomePais => {
    const pais = buscarPorNome(nomePais)[0]
    const popup = document.querySelector("#popup")
    
    popup.style.display= "block"
    popup.classList.toggle("popupVisivel")

    console.log(pais)
    popup.innerHTML = `<div class="detalhes" >
      <h1>${pais.flag}</h1>
      <h3>${pais.name.common}</h3>
      <p><strong>Capital:</strong>${pais.capital}</p>
      <p><strong>População:</strong>${pais.populacao}</p>
      <p><strong>Área:</strong>${pais.area}</p>
      <p><strong>Região:</strong>${pais.region}</p>
      <p><strong>Subregião:</strong>${pais.subregion}</p>
    </div>`
}


//////////////////////////////////////////////////////////////////////
//                        comandos de tela                          //
//////////////////////////////////////////////////////////////////////

const btnOrdenarNome = document.querySelector("#btnOrdenarNome")
const btnOrdenarPopulacao = document.querySelector("#btnOrdenarPopulacao")
const btnOrdenarArea = document.querySelector("#btnOrdenarArea")
const iptCampoBusca = document.querySelector("#campoBusca")
const listaPaises = document.querySelector("#listaPaises")
const selectBuscaRegiao = document.querySelector("#filtroRegiao")

btnOrdenarNome.addEventListener("click", ordenarPorNome)
btnOrdenarPopulacao.addEventListener("click", ordenarPorPopulacao)
btnOrdenarArea.addEventListener("click", ordenarPorArea)

selectBuscaRegiao.addEventListener("click", ()=>{
    paisesFiltrados = buscarPorRegiao(selectBuscaRegiao.value)
    //carregar os paises
    exibirPaises(paisesFiltrados)
})

listaPaises.addEventListener("click", (evento)=>{
    const elemHTMLClicado = evento.target 
    
    // nome do pais está no h3
    const nomePais = recuperaNomePais(elemHTMLClicado)
    exibirDetalhes(nomePais)
    //console.log(nomePais)

})

iptCampoBusca.addEventListener("keyup", async () => {
    //recebe a palavra de busca
    const palavra = iptCampoBusca.value
    
    //chamar a função que filtra
    paisesFiltrados = buscarPorNome(palavra)

    //exibir os paises
    exibirPaises(paisesFiltrados)
})

