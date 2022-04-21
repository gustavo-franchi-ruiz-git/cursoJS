console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhada = false;
const passagemComprador = true;

console.log("lista de Destinos");
console.log(listaDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem")
    listaDeDestinos.splice(1, 1); //retirar campo do array
} else {
    console.log("Comprador menor de idade e sem acompanhante não pode comprar")
}


console.log("Embarque \n\n")
if(idadeComprador >= 18 && passagemComprador){
    console.log("Boa viagem");
}else{
    console.log("Voce não pode embarcar");
}


console.log(listaDeDestinos);


