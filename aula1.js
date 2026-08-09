// g - global (encontra todas as ocorrencias)
// i - insensitive (ignora as letras maiusculas e minusculas)
// () - grupo
// | - or

import { texto } from './base.js';

const regExp1 = /(João|Maria)(, hoje sua esposa)/i;

console.log(regExp1.test(texto))
console.log(regExp1.exec(texto))
