console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhada = false;
let passagemComprador = false;
const destino = "Salvador";

console.log("\n lista de Destinos");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true 

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }else{
        destinoExiste = false;
    }
    contador +=1;
}

console.log("Destino existe :" , destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}


for(let i = 0;i < 3; i++){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}
