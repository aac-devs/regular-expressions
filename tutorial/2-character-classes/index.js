/* OCT 30 - 2022:
CHARACTER CLASSES
*/
console.clear();

/**
 *  CLASES:
 * \d - Dígito: caracter de 0 a 9
 * \s - Espacio: incluye \t (tabulaciones), \n (líneas nuevas) y otros \v, \f, \r
 * \w - Caracter de palabra: letra alfabeto latino, dígito o guion bajo '_'
 *
 * CLASES INVERSAS:
 * \D - Sin dígitos: cualquier cosa, excepto \d.
 * \S - Sin espacio: cualquier cosa, excepto \s.
 * \W - Sin caracter de palabra: cualquier cosa, excepto \w.
 *
 * (.) - Un punto: cualquier caracter, excepto una nueva línea.
 */

console.log('\n1: \\d sin "g"');
let str = '+7(903)-123-45-67';
let regexp = /\d/;
console.log(str.match(regexp), '\n');

console.log('\n2: \\d con "g"');
regexp = /\d/g;
console.log(str.match(regexp), '\n');
console.log(str.match(regexp).join(''), '\n');

console.log('\n3: con símbolos y clases de caracteres \\d');
str = '¿Hay CSS4?';
regexp = /CSS\d/;
console.log(str.match(regexp), '\n');

console.log('\n4: con varias clases de caracteres \\s \\d \\w');
console.log('Me gusta HTML5!'.match(/\s\w\w\w\w\d/), '\n');

console.log('\n5: clases inversas');
str = '+7(903)-123-45-67';
console.log(str.replace(/\D/g, ''), '\n');

console.log('\n6: punto es cualquier cosa');
regexp = /CS.4/;
console.log('CSS4'.match(regexp));
console.log('CS-4'.match(regexp));
console.log('CS 4'.match(regexp));
console.log('CS4'.match(regexp), '\n');

console.log('\n7: punto y "s"');
console.log('A\nB'.match(/A.B/));
console.log('A\nB'.match(/A.B/s));
console.log('A\nB'.match(/A[\s\S]B/));
console.log('A\nB'.match(/A[\d\D]B/), '\n');

console.log('\n8: los espacios también son caracteres');
console.log('1 - 5'.match(/\d-\d/));
console.log('1 - 5'.match(/\d - \d/));
console.log('1 - 5'.match(/\d\s-\s\d/), '\n');
