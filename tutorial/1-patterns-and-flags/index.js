/* OCT 24 - 2022:
PATTERNS AND FLAGS
*/
console.clear();

/**
 * g: encuentra todas las coincidencias, sin 'g' devuelve sólo la primera.
 * i: no distingue entre mayúsculas y minúsculas.
 * m: modo multilínea.
 * u: permite el soporte completo de UNICODE.
 * s: habilita modo 'dotall', que permite que un punto coincida con el caracter nueva línea \n
 * y: modo adhesivo, búsqueda en la posición exacta del texto.
 */

// BUSCANDO [match]:

// 1. Con bandera 'g', devuelve un arreglo de todas las coincidencias.
let str = 'We will, we will rock you';
console.log(str.match(/we/gi), '\n');

// 2. Sin la bandera 'g', devuelve la primera coincidencia en forma de arreglo, con la coincidenca completa en el índice 0 y algunos detalles adicionales en las propiedades.
let result = str.match(/we/i);

console.log('Primera coincidencia:', result[0]);
console.log('Longitud:', result.length);
console.log('Posición de la coincidencia:', result.index);
console.log('Cadena fuente:', result.input, '\n');

// 3. devuelve 'null' si no hay coincidencias.
let matches = 'JavaScript'.match(/HTML/);
console.log(matches, '\n');

// Agregar || [] para que el resultado siempre sea un arreglo
let matches2 = 'JavaScript'.match(/HTML/) || [];
console.log(matches2, '\n');

// REEMPLAZANDO [replace]:

// Sin la bandera 'g'
console.log('We will, we will'.replace(/we/i, 'I'), '\n');
// Con la bandera 'g'
console.log('We will, we will'.replace(/we/gi, 'I'), '\n');

/**
 *  Fragmentos de coincidencia:
 *
 * $&: inserta toda la coincidencia.
 * $`: inserta una parte de la cadena antes de la coincidencia.
 * $': inserta una parte de la cadena después de la coincidencia.
 * $n: si 'n' es un número de 1-2 dígitos, entonces inserta el contenido de los paréntesis n-ésimo.
 * $<name>: inserta el contenido de los paréntesis con el 'name' dado.
 * $$: inserta el caracter $.
 */

// Ejemplo con $&:
console.log('Me gusta HTML'.replace(/HTML/, '$& y JavaScript'), '\n');

// PRUEBAS [test]:

let strt = 'Me gusta JavaScript';
let regexp = /GUSTA/i;

console.log(regexp.test(strt), '\n');
