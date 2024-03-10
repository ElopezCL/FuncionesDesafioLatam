document.addEventListener('DOMContentLoaded',function(){

    const boton1 = document.getElementById("btn-1");
    const boton2 = document.getElementById("btn-2");
    const boton3 = document.getElementById("btn-3");
    const boton4 = document.getElementById("btn-4");
    const boton5 = document.getElementById("btn-5");
    const boton6 = document.getElementById("btn-6")
    const relleno = document.getElementById("caja");


    boton1.addEventListener('click',function(event){
        let color = boton1.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton2.addEventListener('click',function(event){
        let color = boton2.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton3.addEventListener('click',function(event){
        let color = boton3.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton3.addEventListener('click',function(event){
        let color = boton3.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton4.addEventListener('click',function(event){
        let color = boton4.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton5.addEventListener('click',function(event){
        let color = boton5.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })

    boton6.addEventListener('click',function(event){
        let color = boton6.style.backgroundColor;
        relleno.style.backgroundColor = color;
    })


})