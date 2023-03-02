// 55. Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor 
// elemento da linha onde se encontra o maior elemento da matriz. Escreva um algoritmo 
// que leia uma matriz 10 X 10 de números e encontre seu elemento minimax, mostrando 
// também sua posição.

// Gerando a matriz
  
function geraNumeros(x) {
    let lista = [];
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 10000;
        random_number = Number(random_number.toFixed(0));
        lista.push(random_number);
    }
    return lista
}

let matriz = [];

for(let j = 0; j < 10; j++){
    let vetor = geraNumeros(10); 
    matriz[j] = vetor  
}

console.table(matriz);

// Encontrando o minimax da matriz

let linha = 0;
let maior = 0;
let menor = 0;


for(let y =0; y < 10; y++){
    for(let x = 0; x < 10; x++){
        if(matriz[y][x] > maior){
            maior = matriz[y][x]
            linha = [y]
            listaLinha = matriz[y]
            menor = maior
        }
    } 
}

for(let z = 0; z < 10; z++){
    if(listaLinha[z] < menor){
        menor = listaLinha[z];
    }
}

// Resultado no console

console.log("O maior nmero nessa matriz é :", maior);
console.log("Esta é a linha", linha);
console.log("O menor número desta linha é :", menor);








