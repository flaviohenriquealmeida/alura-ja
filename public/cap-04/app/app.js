import { memoizer } from './infra/memoizer.js';

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

const somaDoisNumerosM = memoizer(somaDoisNumeros);
console.log(somaDoisNumerosM(5, 5)); 
console.log(somaDoisNumerosM(10, 10));
console.log(somaDoisNumerosM(5, 5));