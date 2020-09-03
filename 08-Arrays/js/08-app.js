const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Destructuring
const {nombre}  = producto;

// Destructuring con arrays
const numeros = [10,20,30,40,50];
//Se nombran como quieran (el valor está definido por la posicion)
const [primero, segundo, tercero] = numeros;
console.log(primero);