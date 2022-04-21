console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);

console.log("lista de Destinos");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //retirar campo do array
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //mostrar somente um campo