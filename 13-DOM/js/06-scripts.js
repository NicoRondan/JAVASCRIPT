const encabezado = document.querySelector('.contenido-hero h1');

//console.log(encabezado.textContent); //Si en el CSS - visibility: hidden; no lo va a encontrar
//console.log(encabezado.innerText); //sí lo va a encontrar
//console.log(encabezado.innerHTML); //se trae el html

document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';