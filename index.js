// g - global (encontra todas as ocorrencias)
// i - insensitive (ignora as letras maiusculas e minusculas)
// () - grupo
// | - or

import { texto } from './base.js';

// const regExp1 = /(João|Maria)(, hoje sua esposa)/gi;
// console.log(regExp1.test(texto))
// console.log(regExp1.exec(texto))

const regExp1 = /(João|Maria)/gi;

// console.log(texto.match(regExp1))
// console.log(texto.replace(regExp1, 'Joaquim'))
// console.log(texto.replace(regExp1, '"$1"'))
// console.log(texto.replace(regExp1, function (input) {
//   return input.toUpperCase()
// }))
console.log(texto.replace(regExp1, (input) => { return input.toUpperCase() }))
