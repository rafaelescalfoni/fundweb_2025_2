const palavras = ["açucena","advogado","afta","alambique","alcachofra","algarismo","almanaque","almofariz","almoxarife","alquimia","altivez","alvíssaras","amendoim","amnésia","amplificar","ampulheta","ansioso","aplaudir","ascensão","asterisco","atlas","balacobaco","bandolim","barulhento","basquetebol","batráquio","beneficente","berimbau","bicarbonato","brusquidão","bugiganga","bumerangue","burocracia","caatinga","caboclo","cacareco","cacto","cadarço","cãibra","calibrado","camuflagem","candelabro","cassetete","catalisador","catequizar","cérebro","chamariz","cicatriz","cleptomaníaco","coincidência","companhia","condescender","consciente","crepúsculo","cronologia","deglutir","depredar","destruído","diapasão","digladiar","diretriz","dobradiça","ecossistema","embaixador","empecilho","entretido","entrevista","envernizar","enxaqueca","enxerido","escangalhado","escaravelho","escombro","esculacho","esfirra","espinafre","esplendor","estapafúrdio","estetoscópio","exceção","excêntrico","excepcional","faniquito","fascículo","flexível","frustrado","gargantilha","glândula","glicerina","glorioso","gnomo","grampeador","hamster","helicóptero","hemisfério","herdeiro","hermético","hierárquico","hieróglifo","hipocrisia","humanizar","idolatrada","imbróglio","inexorável","inflamado","influência","insignificância","interruptor","invertebrado","iogurte","irascível","lantejoula","licenciado","losango","madrasta","magnético","manteigueira","marimbondo","mesclar","meteorologia","mexerico","micróbio","microfone","microscópio","milionário","mordaz","nebulizador","oscilação","paralisado","pedágio","pernóstico","perturbar","piripaque","plissado","pneumático","pneumonia","poliomielite","potiguar","prescindir","presságio","privilégio","prodígio","prostração","prurido","psicanálise","psicólogo","quadriciclo","quádruplo","quinquilharia","reciclar","reflorescer","reivindicar","rescindir","retrógrado","retrovisor","ritmo","seborreia","sensatez","serelepe","serpentina","simplório","simulacro","sincrônico","sobrevivente","subsídio","supérfluo","suscetível","termômetro","torácico","travesseiro","trilogia","universidade","vangloriar","vaporizador","ventilador","xilindró","ziguezague","ziquizira","zodíaco","zumbido"]

/**
 * Função que sorteia uma palavra do array do jogo
 * @returns um palavra
 */
const sortearPalavra = () => {
    const palavraIndex = Math.floor(Math.random()*palavras.length) 
    //0 - 0,999999
    return palavras[palavraIndex].toUpperCase()
}

/**
 * Função que carrega as letras no painel 
 * @param {*} palavra1 = array de letras
 */
const carregarJogo = palavra1 => {
    console.log("carregarJogo : " + palavra1)
    const ulPainel = document.querySelector(".painel ul")
    ulPainel.innerHTML = palavra1.reduce((acum, letra) => {
        return acum + "<li>"+letra+"</li>"
    },"")
}

//selecionar uma palavra
const palavra = sortearPalavra()

//zerar tentativas
let tentativas = 5
const chutes = []

/**
 * Função que exibe as letras erradas que já foram jogadas
 * @param {*} chutes - array com letras erradas
 */
const carregarChutes = chutes =>{
    document.querySelector(".chutes").innerHTML= chutes.reduce((acum, elem)=> acum + "<li>"+elem+"</li>","")
}

/**
 * Função que substitui caracteres especiais por caracteres sem acento
 * @param {*} letra com ou sem acento
 * @returns letra sem acento
 */
const eliminaAcentos = (letra) => {
    letra = letra.toUpperCase()
    if("ÁÀÃÂ".indexOf(letra)!=-1) return "A"
    if("ÉÊ".indexOf(letra)!=-1) return "E"
    if("Í".indexOf(letra)!=-1) return "I"
    if("ÓÔÕ".indexOf(letra)!=-1) return "O"
    if("ÚÜ".indexOf(letra)!=-1) return "U"
    if("Ç".indexOf(letra)!=-1) return "C"
    return letra
}

//carregar palavra em andamento
let palavraEmAndamento = palavra.split("").map(a=>"")
//carregar painel
carregarJogo(palavraEmAndamento)

/**
 * Função que carrega a variavel palavra em andamento com as letras acertadas pelo jogador
 * @param {*} palavraEmAndamento - palavra em andamento pelo jogador
 * @param {*} palavra - palavra sorteada
 * @param {*} letra - ultima letra escolhida
 * @returns 
 */
const preencherPalavraAndamento = (palavraEmAndamento, palavra, letra) =>{
    palavra.split("").forEach((letraAtual,indice) => {
        if(letraAtual == letra)
            palavraEmAndamento[indice] = letra
    });
    return palavraEmAndamento
}
const btn = document.querySelector("#chutar")

const finalizarJogo = ( )=> {
    alert("você perdeu")
    document.querySelector("#chutar").enable = "False"
    carregarJogo(palavra.split(""))
    document.querySelector(".painel ul").style.color="#f00";
}

btn.addEventListener("click", function() {
    let letra = document.querySelector("#letra").value.toUpperCase()
    document.querySelector("#letra").value=""
    document.querySelector("#letra").focus()
    letra = eliminaAcentos(letra)
    if (!chutes.some(e => e == letra) && !palavraEmAndamento.some(e=> e== letra)) {
        const ocorrencias = palavra.split("").map(elem => elem == letra)
            //perdendo uma jogada
            if (ocorrencias.every(elem => elem==false)) {
                tentativas--
                chutes.push(letra)
                carregarChutes(chutes)
                if(tentativas==0) {
                    //acabar com o jogo
                    finalizarJogo()
                }
            }
            else {
                palavraEmAndamento = preencherPalavraAndamento(palavraEmAndamento, palavra, letra)

                carregarJogo(palavraEmAndamento)
            }
                
    }
    
    
})