import { calculaImc } from './oms.js';

const imc = calculaImc({ peso: 68, altura: 1.71 });
console.log(imc);
