'use srtric';
import{validateString, vAvg, checkAvg} from './validate.js';
import{paintCard,addStudent,addProfesor, modalAlert,modalAlert2} from './paint.js';

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const opt = document.getElementById('opcion')


///////////////////////////////////////
btnAgregar.onclick = function(){
    const name = document.getElementById('nombre').value;
    const lastName =document.getElementById('apellido').value;
    const avg = parseFloat (document.getElementById('promedio').value);
    const nameC = document.getElementById('nombre').value;
    const pro =document.getElementById('apellido').value;
    const edad =parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    
    //console.log(`${name} ${lastName} ${avg} ${op}`);
    if(op === 'estudiante'){
        if(validateString(name) && validateString(lastName) && op != 0){
            if((!isNaN(avg)) && (vAvg(avg))){
                addStudent(name,lastName,avg)
                modalAlert("Estudiante agregado")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            } else {
                document.querySelector('#promedio').value="";
                modalAlert("Promedio Invalido");
            }
        } else {
            modalAlert("Datos Invalidos, revisar los datos");
        }
    } else if (op === 'profesor') {
        if (validateString(nameC) && validateString(pro) && op != 0){
            if (!isNaN(edad)){ 
                addProfesor(name,lastName,avg)
                modalAlert("Profesor agregado")
                document.getElementById('nombre').value="";
                document.getElementById('apellido').value="";
                document.querySelector('#promedio').value="";
            }
        }else{
            modalAlert("Datos Invalidos, revisar los Campos");
        }
        formulario.reset();
    }   
}

opt.onchange = function (){
    let op = document.getElementById('opcion').value; 
    if (op === 'profesor'){
        modalAlert("Sección Profesores")
        document.getElementById('text1').innerText="Nombre completo:";
        document.getElementById('text2').innerText="Profesión:";
        document.getElementById('text3').innerText="Edad:";
    } else if (op === 'estudiante'){
        modalAlert("Sección Estudiante ")
        document.getElementById('text1').innerText="Nombres:";
        document.getElementById('text2').innerText="Apellidos:";
        document.getElementById('text3').innerText="Promedio:";
    }
}

btnMostrar.addEventListener("click", function(){
    const op = document.getElementById('opcion').value;
    if (op === 'estudiante'){
        paintCard("ESTUDIANTE");
    } else if (op === 'profesor') {
        paintCard("PROFESOR");
    }  
});
