
const URL = "https://restcountries.com/v3.1/all?fields=name,area,currency,capital,region,subregion,lang,population"

//parametro: ?fields=param => ?fields=name

const btnOrdenarNome = document.querySelector("#btnOrdenarNome")
const btnOrdenarPopulacao = document.querySelector("#btnOrdenarPopulacao")
const btnOrdenarArea = document.querySelector("#btnOrdenarArea")

const carregarPaises = async () => {
    // 1. estabelecer uma conexao
    // 2. recuperar a promise
  //  console.log(URL)
    const resposta = await fetch(URL)

    // 3. carregar os dados da promises
    const dados = await resposta.json()

    console.log(dados)

}

carregarPaises()


/*
ordenarPorNome()

ordenarPorPopulacao()

ordenarPorArea()
*/





btnOrdenarNome.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por nome")
})

btnOrdenarPopulacao.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por populacao")
})

btnOrdenarArea.addEventListener("click", ()=> {
    console.log("entrou no botao ordenar por area")
})