/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (nome, numero) => {
  const part1 = 'Oi, meu nome é ';
  const part2 = '\nTenho ';
  const part3 = ' anos,\ntrabalho na Trybe e mando muito em programação!';
  const part4 = '\n#VQV!';
  if (nome || numero) {
    return `${part1}${nome}!${part2}${numero}${part3}${part4}`;
  }
  return undefined;
};

module.exports = vqv;
