'use strict'
import { checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];
const cardP =document.getElementById('cardseProfesores') ;
const profesores = [];

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateProfesor = document.querySelector('#templateProfesor').content;

    if(typ === 'ESTUDIANTE'){
        for(let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i> Usuario </i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    }else{
        for(let i of profesores){
            const cloneTemp = templateProfesor.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i> Profesor </i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-profesion').innerHTML = `PROFESIÓN ES: ${i.prof}`;
            fragment.appendChild(cloneTemp);
        }

    }
    cardE.appendChild(fragment);{
        modalAlert('Mostrando usuario');
    }
   
};


const addStudent = (name, lastName, avg) =>{
    //Objeto Literal de JS
    let student = {
        nom : name, 
        ape : lastName,
        prom : avg
    }
    students.push(student);
    modalAlert('Se agregó  usuario');

};


const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./img/MicrosoftTeams-image (2).png";
    img.className = "close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class", "alerta");
    texto.innerHTML = `<strong> ${cad} </strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta"). remove ();
    }
}

const modalAlert2 = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./img/MicrosoftTeams-image (2).png";
    img.className = "close";
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id","alerta2");
    alerta.setAttribute("class", "alerta2");
    texto.innerHTML = `<strong> ${cad} </strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta2"). remove ();
    }
}
export { paintCard,addStudent,modalAlert, modalAlert2  }