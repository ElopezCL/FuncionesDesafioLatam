document.addEventListener("DOMContentLoaded",function(){

    const valor1 = document.getElementById("valor1");
    const valor2 = document.getElementById("valor2");
    const resultado = document.querySelector(".resultado");

    const sumar = document.getElementById("btn-sumar");
    const restar = document.getElementById("btn-restar");

    sumar.addEventListener("click",function(event){
        let suma = parseInt(valor1.value.trim()) + parseInt(valor2.value.trim());
        resultado.textContent = suma;
    })

    restar.addEventListener("click",function(event){
        let restar = parseInt(valor1.value.trim()) - parseInt(valor2.value.trim())
        resultado.textContent = restar;
    })

})