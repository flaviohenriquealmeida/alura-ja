import { calculaImc } from './oms.js';
import { Conta } from './models/conta.js';

const imc = calculaImc({ peso: 68, altura: 1.71 });
console.log(imc);

const conta = new Conta({ 
    titular: 'Flávio', 
    banco: '123',
    agencia: '456', 
    numero: '789',
});

console.log(conta);