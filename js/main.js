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
        bloque[i].classList.toggle('activo')
    })
})