//Distribución de especialistas en consultorio médico

class especialidad {
    constructor (num_cons,horas_dia,horas_tarde){
        this.num_cons = num_cons;
        this.horas_dia = horas_dia;
        this.horas_tarde = horas_tarde;
    }

    //Calcula el total de horas trabajadas en el día
    totalHoras(especialidad){
        alert("Total de " + (this.horas_dia + this.horas_tarde) + " horas en el día")
    }

    //Calcula paga del profesional por el día
    paga(especialidad){
        console.log("Paga de $"+ (150 * (this.horas_dia + this.horas_tarde)) + " por el día");
    }

    //Informa en qué consultorio atiende cada especialista
    consultorio(especialidad){
        console.log("Ésta especialidad atiende en el consultorio " + this.num_cons);
    }
}

const cardio = new especialidad("6", 3, 7);
const gineco = new especialidad("5", 3, 8);
const trauma = new especialidad("4", 4, 2);
const clinico = new especialidad("3", 4, 6);
const eco = new especialidad("2", 0, 3);
const oftalmo = new especialidad("1", 4, 8);

let consulta = prompt("Ingrese su consulta (total de horas, paga o consultorio), seguido de la especialidad buscada (Cardio, Gineco, Trauma, Clínico, Eco u Oftalmo)").toLowerCase;

//Resultados para alerts
    // total_cardio = cardio.totalHoras()
    // total_gineco = gineco.totalHoras()
    // total_trauma = trauma.totalHoras()
    // total_clinico = clinico.totalHoras()
    // total_eco = eco.totalHoras()
    // total_oftalmo = oftalmo.totalHoras()

    paga_cardio = cardio.paga()
    // paga_gineco = gineco.paga()
    // paga_trauma = trauma.paga()
    // paga_clinico = clinico.paga()
    // paga_eco = eco.paga()
    // paga_oftalmo = oftalmo.paga()

    consultorio_cardio = cardio.consultorio()
    // consultorio_gineco = gineco.consultorio()
    // consultorio_trauma = trauma.consultorio()
    // consultorio_clinico = clinico.consultorio()
    // consultorio_eco = eco.consultorio()
    // consultorio_oftalmo = oftalmo.consultorio()


if (consulta == "total de horas cardio" || consulta == "total cardio"){
    alert(total_cardio)
}
else if (consulta == "paga cardio"){
    alert(paga_cardio)
}
else if (consulta == "consultorio cardio"){
    alert(consultorio_cardio)
}


// else if (consulta == "total de horas gineco" || consulta == "total gineco"){
//     alert(total_gineco)
// }
// else if (consulta == "paga gineco"){
//     alert(paga_gineco)
// }
// else if (consulta == "consultorio gineco"){
//     alert(consultorio_gineco)
// }


// else if (consulta == "total de horas trauma" || consulta == "total trauma"){
//     alert(total_trauma)
// }
// else if (consulta == "paga trauma"){
//     alert(paga_trauma)
// }
// else if (consulta == "consultorio trauma"){
//     alert(consultorio_trauma)
// }


// else if (consulta == "total de horas clínico" || consulta == "total clínico" || consulta == "total de horas clinico" || consulta == "total clinico"){
//     alert(total_clinico)
// }
// else if (consulta == "paga clínico" || consulta == "paga clínico"){
//     alert(paga_clinico)
// }
// else if (consulta == "consultorio clínico" || consulta == "consultorio clínico"){
//     alert(consultorio_clinico)
// }


// else if (consulta == "total de horas eco" || consulta == "total eco"){
//     alert(total_eco)
// }
// else if (consulta == "paga eco"){
//     alert(paga_eco)
// }
// else if (consulta == "consultorio eco"){
//     alert(consultorio_eco)
// }


// else if (consulta == "total de horas oftalmo" || consulta == "total oftalmo"){
//     alert(total_oftalmo)
// }
// else if (consulta == "paga oftalmo"){
//     alert(paga_oftalmo)
// }
// else if (consulta == "consultorio oftalmo"){
//     alert(consultorio_oftalmo)
// }

else {
    alert("Error. Recargue la página e inicie de nuevo.")
}