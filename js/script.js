let inputName= document.querySelector('#cardName');
let inputNum= document.querySelector('#cardNumber');
let inputFecha= document.querySelector('#fecha');
let inputCvc= document.querySelector('#cvc');

let nombre= document.querySelector(".nameCard");
let numero= document.querySelector(".numberCard");
let cvc= document.querySelector(".cvc");
let fecha= document.querySelector(".fecha");

inputName.addEventListener("input", function(){
    if(inputName.value==""){
        nombre.textContent="Nombre";
    }else{
        nombre.textContent=inputName.value;
    }

    
});

inputNum.addEventListener("input", function(){
    if(inputNum.value==""){
        numero.textContent="0000 0000 0000 0000";
    }else{
        numero.textContent=inputNum.value;
    
    inputNum.addEventListener("keyup",(e)=>{
    
        if(e.keyCode==8){

        }else{
            if(inputNum.value.length==4){
                inputNum.value= numero.textContent + " ";
            }
            if(inputNum.value.length==9){
                inputNum.value= numero.textContent + " ";
            }
            if(inputNum.value.length==14){
                inputNum.value= numero.textContent + " ";
            }
        }

    });
    }

    
    
    
   
        
        
    

});

inputCvc.addEventListener("input", function(){
    if(inputCvc.value==""){
        cvc.textContent="cvc";
    }else{
        
        cvc.textContent=inputCvc.value;

    }
    
    

});

inputFecha.addEventListener("input", function(){
    if(inputFecha.value==""){
        fecha.textContent="00/00";
    }else{
        fecha.textContent=inputFecha.value;
    }
    
    

});


