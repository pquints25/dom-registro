let contenedor = document.querySelector('#contenedor'); //este es el mas comun, # . y por tag h1,div, etc
contenedor.innerHTML = '<div><h1> Agregado desde JS </h1></div>'; //setea o ejecuta el contenido

// esto cambia en base a evento doble click, "orden que se le pide"
contenedor.addEventListener('dblclick', function(){
    let tituloPrincipal = document.querySelector('h1');
    tituloPrincipal.innerHTML = 'esto cambia en base a evento doble click';
});


