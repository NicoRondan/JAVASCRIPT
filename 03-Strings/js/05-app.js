const producto = 'Monitor 20 pulgadas';

console.log(producto);
//Reemplazar en el string
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//Cortar una parte de una cadena de texto
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

//Alternativa a slice
console.log(producto.substring(0, 10));