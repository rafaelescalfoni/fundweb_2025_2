const alunos = [new Aluno(111,"Ana", "Sistemas de Informação", 2023), 
        new Aluno(112,"Pedro", "Física", 2020), 
        new Aluno(113,"Enzo", "Engenharia Elétrica", 2022), 
        new Aluno(114,"Maria", "Sistemas de Informação", 2024), 
        new Aluno(115,"Beatriz", "Sistemas de Informação", 2025), 
        new Aluno(116,"José", "Turismo", 2022), 
        new Aluno(117,"Paulo", "Turismo", 2023), 
        new Aluno(118,"Gabriel", "Física", 2019), 
        new Aluno(119,"João", "Engenharia", 2025)]

function Aluno(mat, nome, curso, ano){
    this.matricula = mat
    this.nome = nome
    this.curso = curso,
    this.anoMatricula = ano
}
//console.log(alunos)

const nomeAlunos = alunos.map(elem => elem.nome)

const alunosDentroDoPrazo = alunos.every((elem)=> {
    return elem.anoMatricula > 2019
})

const alunosFisica = alunos.some((elem) => {
    return elem.curso == "Filosofia"
})

console.log(alunosFisica)
/*
for (let i=0;i<alunos.length;i++){
    nomeAlunos[i] = alunos[i].nome
}
*/


const lista = document.querySelector(".resposta")
/*
let itensLista = ""
for(let i=0;i<alunos.length;i++) {
    itensLista += "<li>"+ alunos[i].nome + "</li>"
}
console.log(itensLista)
*/
//lista.innerHTML = itensLista


lista.innerHTML = alunos.reduce(function(itensLista,elem){
    return itensLista + "<li>"+ elem.nome + "</li>"
},"")


// Alguns dados para você trabalhar
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank' ];
    


/* 
    1. Faça uma função que filtre a lista de inventores para aqueles que nasceram de 1500 a 1599.
*/
const lista1 = inventors.filter(elem => (elem.year >=1500 && elem.year<=1599))

/*
    2. Faça uma função que retorne um array com os primeiros e últimos nomes dos inventores.
*/
const nomeCompletoLista = inventors.map (elem => elem.first+ " " + elem.last)

/*
    3. Faça uma função que ordene o array de inventores pela data de nascimento, do mais antigo para o mais novo.
*/

const sortedInventors = inventors.sort((a, b) => a.year > b.year)


inventors.forEach(elem => elem.age = elem.passed - elem.year)

/*
    4. Faça uma função que identifique quais inventores estiveram vivos juntos.
*/
const anoIdade = inventors.filter(elem => (elem.year> 1800 && elem.year<1899)).map(elem=>elem.first + " " + elem.last)
console.log(anoIdade)
/*
    5. Faça uma função que ordene os inventores pelos anos vividos.
    */

const inventorsAge = inventors.sort((a, b) =>  (a.passed - a.year) < b.passed - b.year)
//console.log(inventorsAge)

/*
    6. Crie uma função que remova as redundâncias na lista abaixo:
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
*/