/*
g - global (encontra todas as ocorrencias)
i - insensitive (ignora as letras maiusculas e minusculas)
() - grupo
| - or

Quantificadores
* (opcional) 0 ou N {0,}
+ (obrigatório) 1 ou N {1,}
? (opcional) 0 ou 1 {0,1}
\ caracter de escape
{min, max}

const regExp1 = /(João|Maria)(, hoje sua esposa)/gi;
console.log(regExp1.test(texto))
console.log(regExp1.exec(texto))

const regExp1 = /(João|Maria)/gi;
console.log(texto.match(regExp1))
console.log(texto.replace(regExp1, 'Joaquim'))
console.log(texto.replace(regExp1, '"$1"'))
console.log(texto.replace(regExp1, function (input) {
  return input.toUpperCase()
}))
console.log(texto.replace(regExp1, (input) => { return input.toUpperCase() }))

const regExp1 = /(Jo+ão+)/gi;
console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi
for (const arquivo of arquivos) {
  if (arquivo.match(regExp2)) console.log(arquivo)
}
*/

import { html } from './base.js';
const regExp1 = /<.+>.+<\/.+>/g
const regExp2 = /<.+?>.+?<\/.+?>/g
console.log(html.match(regExp1)) // greedy
console.log(html.match(regExp2)) // non-greedy

