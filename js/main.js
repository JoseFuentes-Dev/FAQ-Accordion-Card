const rota = document.querySelectorAll('.bloque');
const imgrot = document.querySelectorAll('.acc');
rota.forEach((cadaimgrot, i)=>{
    rota[i].addEventListener("click", ()=>{
        imgrot[i].classList.toggle("rotate");
    });
})
const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');
h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', ()=>{
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo')
    })
})