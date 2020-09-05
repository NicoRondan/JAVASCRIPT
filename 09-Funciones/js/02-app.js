// Declaración de función (function declaration)
sumar();  //Se ejecutan antes de declararla
function sumar() {
    console.log(2 + 2);
}


// Expresión de función (function expression)
sumar2(); //No se puede ejecutar
const sumar2 = function() {
    console.log( 3 + 3);
}
