let cep = "20230013"
let url= `https://viacep.com.br/ws/${cep}/json`

/*
 * Quando trabalhamos com Promises, delegamos a ela a  
 * responsabilidade de lidar com as possíveis situações.
 * 
 * Para trabalhar com AJAX usando Promises, iremos 
 * recorrer ao objeto Fetch
 * 
 */
/*
CASO 1 - THENs aninhados
fetch(url).then(dados => {
    return dados.json() // retorna a nossa promessa
}).then(d => {
    console.log(d) // o segundo recebe como parâmetro "d" o valor retornado do then anterior
}).catch(erro => alert("deu erro " + erro))
*/
/*
2. SEPARANDO OS THENs
const resposta = fetch(url).then(dados => {
    return dados.json() // retorna a nossa promessa
})

resposta.then(dados => {
    console.log(dados)
})

Usando async/await (procedural/imperativo)
*/
const buscaCEP = async (cep,url) => {
    try {
        const resposta = await fetch(url)
        const dados = await resposta.json()
    
        console.log(dados)
    } catch(erro) {
        console.log(`Deu bode: ${erro}`)
    }
}

buscaCEP(cep, url)

