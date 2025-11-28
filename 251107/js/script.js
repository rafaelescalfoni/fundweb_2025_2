const btn = document.querySelector("#adicionarTarefa") 

const listaUl = document.querySelector("#listaTarefas")

const popup = document.querySelector(".popup")

popup.addEventListener("click", ()=> {
    popup.classList.add("hidden")
    popup.classList.remove("visible")
    
})

btn.addEventListener("click", ()=>{
  
    popup.classList.add("visible")
    popup.classList.remove("hidden")
    

    //programar o clique aqui
    console.log("conseguiu entrar no botão")

    //recuperar a ul no dom
    const ulDeTarefas = document.querySelector("#listaTarefas")
    // recuperar a tarefa digitada
    const tarefa = document.querySelector("#tarefa").value
    //criar uma nova li 
    const novaLi = document.createElement("li")
    //adicionar conteudo textual ao elemento HTML novo criado  
    novaLi.textContent = tarefa
    //criar um link "Apagar"
    const novoLink = document.createElement("a")
    novoLink.href = "#"
    novoLink.textContent = "Apagar"
    // adicionar essa li no DOM
    ulDeTarefas.appendChild(novaLi)
    novaLi.appendChild(novoLink) 
})

listaUl.addEventListener("click", (e) => {
    
    console.log(e.target.tagName)
    if(e.target.tagName=="A"){
        const paiDoLink  = e.target.parentNode
        paiDoLink.remove()
        
    }
    // apagar o li
})


const teste = () =>  {
    const frutas = ["abacaxi", "banana", "maçã"]
    frutas.forEach((fruta) => {
        console.log(fruta)
        
    })
}

teste()