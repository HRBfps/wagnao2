// Capturando os dados do formulário
const dados = document.querySelector('#forms');

//monitor do evento reset
dados.addEventListener('reset', function () {
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = "";
})
// Criando um monitor do evento submit e função anônima
dados.addEventListener('submit', function (event) {
    // Previne o evento padrão do submit
    event.preventDefault();

    let Peso = Number(document.querySelector('#peso').value);
    let Altura = Number(document.querySelector('#altura').value);

    console.log(Peso,Altura)

    /* ou
    let Peso = document.querySelector('#peso');
    let Altura = document.querySelector('#altura);

    let vPeso = Number(Peso.value)
    let vAlt = Number(Altura.value)

    console.log(vPeso, vAlt)
    */
    if (!Peso) {
        mostraResultado('Peso Inválido', false);
        return;
    }
    if (!Altura) {
        mostraResultado('Altura Inválido', false);
        return;
    }
    const IMC = getIMC(Peso, Altura)

    mostraResultado(`O seu IMC é: ${IMC}E sua classificação é: ${getClasseIMC(IMC)}`, true)
});

function getClasseIMC(IMC){
    const classes = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obeso',
        'Obeso Mórbido'
    ];
    if (IMC >= 40) return classes[4];
    if (IMC >= 39) return classes[3];
    if (IMC >= 25) return classes[2];
    if (IMC > 18.5) return classes[1];
    if (IMC < 18.5) return classes[0];
}
function getIMC(peso,altura){
    let imc = peso / altura ** 2
    return imc.toFixed(2);
}
function mostraResultado(mensagem, verifica) {
    //Pega a mensagem
    let frase = document.querySelector('#resultado');
    frase.innerHTML = '';
    //Cria o elemento P
    let p = criaP()
    //Cria uma classe no elemento P
    verifica ? p.classList.add('acerto') : p.classList.add('erro');
    //Coloca a mensagem dentro do P
    p.innerHTML = mensagem
    //Cria o P
    frase.appendChild(p)

}
function criaP(){
    let p = document.createElement('p')
    return p;
}
    // Captura os dados dos inputs




    // Validade dos valores que atendem à condição
    

    // Chamada da função que calcula o IMC
    

    // Chamada da função que traz a mensagem da classificação do IMC
   

    // Monta a mensagem para ser enviada
    

    // Chama a função do resultado (mensagem) e seta como True
    

// Função para calcular o IMC

// Função que gera a classificação do IMC


// Função que cria o resultado


// Função para criar o elemento p


// Captura o evento 'reset' e limpa o resultado
