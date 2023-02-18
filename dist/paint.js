
import { checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const cardP =document.getElementById('cardseProfesores') ;
const students = [];
const profesores = [];

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    const templateProfesor = document.querySelector('#templateProfesor').content;

    if(typ === 'ESTUDIANTE'){
        for(let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i> Estudiante </i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    }else if (typ === 'PROFESOR') ;{
        for(let i of profesores){
            const cloneTemp = templateProfesor.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i> Profesor </i>";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE COMPLETO: ${i.nameC.toUpperCase()} LA PROFESIÓN ES: ${i.pro.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `LA EDAD ES: ${i.edad.toUpperCase()}`;
            fragment.appendChild(cloneTemp);
        }
    }
    cardE.appendChild(fragment);
    cardP.appendChild(fragment);
};


const addStudent = (name, lastName, avg) =>{
    //Objeto Literal de JS
    let student = {
        nom : name, 
        ape : lastName,
        prom : avg
    }
    students.push(student);
    modalAlert2('Mostrando Estudiante');
}
const addProfesor = (name, lastName, avg) =>{
    let profesor ={
        nameC : name, 
        pro : lastName,
        edad : avg
    }
    profesores.push(profesor);
    modalAlert2('Mostrando Profesor');
}

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
        document.getElementById("alerta"). remove();
    }
}
const modalAlert2 = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = "./img/MicrosoftTeams-image (2).png";
    img.className = "close";
    texto.setAttribute("class", "textAlerta2");
    alerta.setAttribute("id","alerta2");
    alerta.setAttribute("class", "alerta2");
    texto.innerHTML = `<strong> ${cad} </strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta2"). remove();
    }
}

export { paintCard,addProfesor,addStudent,modalAlert, modalAlert2}