/*console.log("Aqui tem um texto");

let nome = "Jailson", idade = 33;

console.log(`Seu nome é ${nome} e sua idade é ${idade} anos`);

let suaIdade = prompt("Sua idade");

if (suaIdade >= 18){
    console.log("você pode entrar!");
} else {
    console.log("Acesso negado!");
} 

function pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log(`Olá ${nome}, sua idade é ${idade}, \n Seja Bem-Vindo!!`);
}

let nome = prompt("Digite sua nome:")
let idade = prompt("Digite sua idade:")

console.log(pessoa(nome, idade)); 

let numero = 20;

function parImpar (numero){
    if(numero % 2 == 0){
        let numero = 10;
        console.log("È par!!!");
        console.log(numero);
    } else {
        console.log("È impar!!!");
    }
}

parImpar(numero)
console.log(numero);
*/

//funciton Arrow

/*
const potenica = (numero) => {
    return numero * numero;
}

function potenica (numero){
    return numero * numero;
    
} 

console.log(potenica(8));
*/

const enviar = document.querySelector("#enter");

enviar.addEventListener("click", function(e){

   e.preventDefault();

    const txnome = document.querySelector("#txnome");
    const nome = txnome.valeu;

    console.log(`Nome: ${nome}`);
})






