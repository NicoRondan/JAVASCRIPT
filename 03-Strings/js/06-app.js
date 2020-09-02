const producto = 'Monitor 20 pulgadas';

//.repeat te va a permitir repetir una cadena de texto.

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split divide un string

const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript moderno #";
console.log(tweet.split('#'));