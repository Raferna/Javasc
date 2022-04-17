//Distribución de especialistas en consultorio médico

class especialidad {
    constructor (nombre,num_cons,horas_dia,horas_tarde){
        this.nombre = nombre;
        this.num_cons = num_cons;
        this.horas_dia = horas_dia;
        this.horas_tarde = horas_tarde;
    }

    // //Calcula el total de horas trabajadas en el día
    totalHoras (especialidad){
        return (this.horas_dia + this.horas_tarde)
    }

    // //Calcula paga del profesional por el día
    paga (especialidad){
        return (150 * (this.horas_dia + this.horas_tarde))
    }

    // //Informa en qué consultorio atiende cada especialista
    consultorio (especialidad){
        return this.num_cons
    }
}

const especialidades = [];
especialidades.push (new especialidad("Cardio", "6", 0, 7));
especialidades.push (new especialidad("Gineco", "5", 0, 8));
especialidades.push (new especialidad("Trauma", "4", 4, 0));
especialidades.push (new especialidad("Clinico", "3", 4, 6));
especialidades.push (new especialidad("Eco", "2", 0, 3));
especialidades.push (new especialidad("Oftalmo", "1", 4, 8));

// let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)");

// //Resultados para alerts
    total_cardio = cardio.totalHoras()
    total_gineco = gineco.totalHoras()
    total_trauma = trauma.totalHoras()
    total_clinico = clinico.totalHoras()
    total_eco = eco.totalHoras()
    total_oftalmo = oftalmo.totalHoras()

    paga_cardio = cardio.paga()
    paga_gineco = gineco.paga()
    paga_trauma = trauma.paga()
    paga_clinico = clinico.paga()
    paga_eco = eco.paga()
    paga_oftalmo = oftalmo.paga()

    consultorio_cardio = cardio.consultorio()
    consultorio_gineco = gineco.consultorio()
    consultorio_trauma = trauma.consultorio()
    consultorio_clinico = clinico.consultorio()
    consultorio_eco = eco.consultorio()
    consultorio_oftalmo = oftalmo.consultorio()

    miForm = document.getElementById("formulario");
    miForm.addEventListener("submit", validarFormulario);
    
    function validarFormulario () {
        dato1 = formulario.children[1].value;
        espec1 = formulario.children[2].value;
        
        console.log(dato1);
        console.log(espec1);
        }

        let consulta = dato1 + " " + espec1
        

        if (consulta == "total de horas cardio" || consulta == "total cardio"){
            alert("Total de " + total_cardio + " horas en el día")
            }
        else if (consulta == "paga cardio"){
            alert("Paga de $"+ paga_cardio + " por el día");
            }
        else if (consulta == "consultorio cardio"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_cardio);
            }


        else if (consulta == "total de horas gineco" || consulta == "total gineco"){
            alert("Total de " + total_gineco + " horas en el día")
            }
        else if (consulta == "paga gineco"){
            alert("Paga de $"+ paga_gineco + " por el día");
            }
        else if (consulta == "consultorio gineco"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_gineco);
            }


        else if (consulta == "total de horas trauma" || consulta == "total trauma"){
            alert("Total de " + total_trauma + " horas en el día")
            }
        else if (consulta == "paga trauma"){
            alert("Paga de $"+ paga_trauma + " por el día");
            }
        else if (consulta == "consultorio trauma"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_trauma);
            }


        else if (consulta == "total de horas clínico" || consulta == "total clínico" || consulta == "total de horas clinico" || consulta == "total clinico"){
            alert("Total de " + total_clinico + " horas en el día")
            }
        else if (consulta == "paga clínico" || consulta == "paga clínico"){
            alert("Paga de $"+ paga_eco + " por el día");
            }
        else if (consulta == "consultorio clínico" || consulta == "consultorio clínico"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_clinico);
            }


        else if (consulta == "total de horas eco" || consulta == "total eco"){
            alert("Total de " + total_eco + " horas en el día")
            }
        else if (consulta == "paga eco"){
            alert("Paga de $"+ paga_eco + " por el día");
            }
        else if (consulta == "consultorio eco"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_eco);
            }


        else if (consulta == "total de horas oftalmo" || consulta == "total oftalmo"){
            alert("Total de " + total_oftalmo + " horas en el día")
            }
        else if (consulta == "paga oftalmo"){
            alert("Paga de $"+ paga_oftalmo + " por el día");
            }
        else if (consulta == "consultorio oftalmo"){
            alert("Ésta especialidad atiende en el consultorio " + consultorio_oftalmo);
            }

        else {
            alert("Error. Recargue la página e inicie de nuevo.")
            }


const mañanas_libres = especialidades.filter((el) => el.horas_dia === 0)
const tardes_libres = especialidades.filter((el) => el.horas_tarde === 0)
console.log(mañanas_libres);
console.log(tardes_libres);