let form= document.getElementById("form");


form.addEventListener("submit", (e)=>{
    console.log(e);
    e.preventDefault();

    document.querySelector(".flex-right").setAttribute("style","display: none;");
    document.querySelector(".flex-complete").classList.replace("gracias-container","gracias-container-vista");

});


let continuar= document.getElementById("boton");

continuar.addEventListener("click", ()=>{

    location.reload();

});