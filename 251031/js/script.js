/*
console.log("alô mundo")

let a = 0.1
let b = 0.2
console.log(a+b)


//As instruções abaixo geram valores aleatórios 
//entre 0 e 255 para atribuir a cores RGB


console.log(`Cor vermelha escolhida ${Math.trunc((Math.random()*256))}`)


*/
/**
 * Funcao para gerar cores aleatorias
 * @returns - um código RGB sorteado
 */
function geraCor() {
    let corAleatoriaVermelha = Math.random()*256 
    let corAleatoriaVerde = Math.random()*256 
    let corAleatoriaAzul = Math.random()*256 

    corAleatoriaVermelha = Math.trunc(corAleatoriaVermelha)
    corAleatoriaVerde = Math.trunc(corAleatoriaVerde)
    corAleatoriaAzul = Math.trunc(corAleatoriaAzul)

    return "rgb("+corAleatoriaVermelha+"," +corAleatoriaVerde+","+corAleatoriaAzul+")"
}
//expressão de função
const somar = function(a, b) {
    return a+b
}

somar(2,3)

//arrow function
const multiplicar = (a, b) => {
    //linha1
    //linha 2
    return a*b
}

const dobrar = numero => numero*2

// atribuindo o h1 da página web na constante cabecalhoDaPagina
const cabecalhoDaPagina = document.querySelector("#cabecalho")
cabecalhoDaPagina.textContent = "Outro cabeçalho"
console.log(cabecalhoDaPagina)

// atribuindo o botao da página web na constante botao
const botao = document.querySelector("#executar")
// adicionando um comportamento ao botao ao clicar
botao.onclick = function() {
    //document.body.style.backgroundColor = geraCor()
}

/*
exercício 1
*/
botao.addEventListener("click", function(){
    //document.body.style.backgroundColor = geraCor()
    // a. Recuperar o valor digitado na input#frase
    const frase = (document.querySelector("#frase").value).toLowerCase()

    // b. contar vogais
    let qtdVogais = 0
    for(let i=0; i< frase.length; i++){
        if(frase[i] == "a") qtdVogais++
        if(frase[i] == "e") qtdVogais++
        if(frase[i] == "i") qtdVogais++
        if(frase[i] == "o") qtdVogais++
        if(frase[i] == "u") qtdVogais++
    }
    // c. escrever uma resposta
    const resultado = document.querySelector("#resultado")
    resultado.textContent = `A frase possui ${qtdVogais} vogais`
})

/*
exercicio 2
*/

const botao2 = document.querySelector("#executar2")
botao2.addEventListener("click", function(){

})

/*
exercicio 3
*/

const botao3 = document.querySelector("#executar3")
botao3.addEventListener("click", function(){

})

/*
exercicio 4
*/

const botao4 = document.querySelector("#executar4")
botao4.addEventListener("click", function(){

})
