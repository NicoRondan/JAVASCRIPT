const producto = '        Monitor 20 pulgadas       ';

console.log(producto.length);

// Eliminar del inicio...
console.log(producto.trimStart());
//Del final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());

console.log(producto.trim());