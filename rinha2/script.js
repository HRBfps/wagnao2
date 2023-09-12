/*
Colocar imagem/tag html, a partir do document.write
document.write('<img class="triangulo" src="./images/triangulo.jpg" alt="deu ruim">')
*/
let listaPoke1 = [ // lista com pokemon amigo (que a gente luta com)
    'bulbasaur', //1
    'squirtle', //2
    'charmander', //3
    'pikachu', //25
]

let listaPoke2 = [ //lista com pokemon adversário
    'zoroark',
    'gengar',
    'hypno',
    'chansey',
]

let listaPoke3 = [ // lista pra saber se o poke é amigavel ou n
    'n',
    's',
    'n',
    's',
]

const formulario = document.getElementById('forms'); // pega as informações do formulario
const pokeA = document.getElementById('pokeAmigo');
const pokeI = document.getElementById('pokeInimigo');

formulario.addEventListener('submit', function (event) { // captura o evento de submit (apertar o botao)
    event.preventDefault(); // previne q o botao leve pra outra coisa


    var poke = Math.floor(Math.random() * 4 ) // gera um numero aleatório pro poke q a gnt vai usar
    var poke2 = Math.floor(Math.random() * 4 ) // "" vai lutar
    
    if (poke == 0 ) {
        pokeA.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif">'
    }else if (poke == 1) {
        pokeA.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif">'
    }else if (poke == 2) {
        pokeA.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif">'
    }else if (poke == 3) {
        pokeA.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif">'
    }else {
        pokeA.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif">'
    }

    if (poke2 == 0 ) {
        pokeI.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/571.gif">'
    }else if (poke2 == 1) {
        pokeI.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif">'
    }else if (poke2 == 2) {
        pokeI.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif">'
    }else if (poke2 == 3) {
        pokeI.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif">'
    }else {
        pokeI.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif">'
    }

    botoes = document.getElementById('botoes') // pega a div dos botoes
    botoes.innerHTML = '<button id="fight" type="button">Lutar</button> <br> <button id="run" type="button">Correr</button>' // cria os botoes na div
    fight.addEventListener('click', function(e) { // função pra se clicar no botão de lutar
        var nA = Math.floor(Math.random() * 21 ) // gera um numero aleatório até 20 pra gnt
        var nI = Math.floor(Math.random() * 21 ) // "" pra eles

        if (nA > nI) { // vitoria amiga
            console.log('vencemo')
        }else if (nI > nA) { // vitoria inimiga
            console.log('perdemo')
        }else { //empate
            console.log('empatamo')
        }
    })
    run.addEventListener('click', function(e) { // função pra se clicar no botao correr
        if (listaPoke3[poke2] == 'n' ) {
            console.log('mamou legal')
        }else if (listaPoke3[poke2] == 's' ) {
            console.log('ta tudo bem')
        }else {
            console.log('ué')
        }
    })
})


/* conteudo.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif">'  ESCREVER O CONTEUDO
 if (lado1 <= lado2 + lado3 &&
    lado2 <= lado3 + lado1 &&
    lado3 <= lado1 + lado2) {
        if ((lado1 == lado2) && (lado1 == lado3)){
            document.write('<p>Equilatero(Tudo Igual)</p> <section class="sec"><img class="triangulo" src="./images/equilatero.png"></section>') 
        }else if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)) {
            document.write('<p>Escaleno(Todos iguais)</p> <section class="sec"> <img class="triangulo" src="./images/escaleno.png"></section>') 
        }else{
            document.write('<p>Isósceles(Só dois iguais)</p> <section class="sec"> </p><img class="triangulo" src="./images/isósceles.png"></section>') 
        }
    }else {
        document.write('<p class="erro">isso nem é triangulo bobao</p>')
    }
/*
document.write('<section class="sec"><p></p><img class="triangulo" src="./images/triangulo.png"></section>') */
