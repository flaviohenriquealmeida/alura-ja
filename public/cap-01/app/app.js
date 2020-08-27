import { calculaImc } from './oms.js';

const imc = calculaImc({ altura: 1.71, peso: 68 });
const imc2 = calculaImc({ peso: 68, altura: 1.71 });
console.log(imc);
console.log(imc2);