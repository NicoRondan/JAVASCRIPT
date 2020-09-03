const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Retornamos arreglo con los keys de los objetos
console.log(Object.keys(producto));

//Retornamos valores de cada propiedad
console.log(Object.values(producto));

//Retornar todo en pares
console.log(Object.entries(producto));