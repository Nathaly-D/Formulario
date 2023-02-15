'use srtric';
import{validateString, vAvg, checkAvg} from './validate.js';
import{paintCard,addStudent,modalAlert, modalAlert2} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

//Estudiante
btnAgregar.onclick = function(){
    const name = document.getElementById('nombre').value;
    const lastName =document.getElementById('apellido').value;
    const avg = parseFloat (document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    
    //console.log(`${name} ${lastName} ${avg} ${op}`);
    if(validateString(name) && validateString(lastName) && op != 0){
        if((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg)
        }else{
            document.querySelector('#promedio').value="";
            modalAlert("Promedio Invalido")
        }
    }else{
        modalAlert("Datos Invalidos, revisar los datos");
    }
    formulario.reset(); 
}


btnMostrar.addEventListener("click", function(){
    paintCard("ESTUDIANTE");

});
 
