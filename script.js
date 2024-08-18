// guarda el angulo de rotacion del spinner
let rotation = 0;

document.getElementById("botonjugar").addEventListener("click", () => { 
     // Esconde el boton de jugar
    document.getElementById("botonjugar").style.display = "none";

          // aparece el spinner
    document.getElementById("spinner").style.display = "block";   

});
  // gira el spinner cuando se hace click
document.getElementById("spinner").addEventListener("click", () => {
    rotation += 90; 
  
      // gira el spinner con el nuevo angulo   
    document.getElementById("spinner").style.transform = `rotate(${rotation}deg)`; 

});
