// BASE DE DATOS JSON CON LOS MESES DEL AÑO PARA CALENDARIO
let meses = [
    {
        nombre: 'Enero',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:0
    },

    {
        nombre: 'Febrero',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"],
        number:1
    },

    {
        nombre: 'Marzo',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:2
    },

    {
        nombre: 'Abril',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        number:3
    },

    {
        nombre: 'Mayo',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:4
    },

    {
        nombre: 'Junio',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        number:5
    },

    {
        nombre: 'Julio',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:6
    },

    {
        nombre: 'Agosto',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:7
    },

    {
        nombre: 'Septiembre',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        number:8
    },

    {
        nombre: 'Octubre',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:9
    },

    {
        nombre: 'Noviembre',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        number:10
    },

    {
        nombre: 'Diciembre',
        dias: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        number:11
    }
];


// DECLARAMOS CONSTANTES
const mesActual = document.querySelector(".mesactual");
const contenedorDias = document.querySelector(".dias");

// CREAR CALENDARIO
const fecha = new Date();
let mesHoy = fecha.getMonth() + 1;
let diaHoy = fecha.getDate() - 1;

for(i = 1; i < meses.length; i++){
        // ESCRIBE MES ACTUAL Y RECOGE LOS DIAS SEGUN DATOS EN JSON
        let mes = meses[mesHoy]
        let diasCont = mes.dias
        mesActual.innerHTML = mes.nombre;

        //BUCLE PARA CREAR DIAS 
        for(i = 0; i < diasCont.length; i++){
            let dia = document.createElement("p");
            dia.innerHTML = diasCont[i];
            contenedorDias.appendChild(dia);
        }
    }

// INTERACCION CON EL FORMULARIO
const start = document.querySelectorAll(".start")
const form = document.querySelector(".form")
const tituloform = document.querySelector(".form h1")
const formul = document.querySelector(".form form")
const startDate = document.querySelector(".submit")
const calendario = document.querySelector(".calendario")

start.forEach(elem => {
    elem.addEventListener("click", () => {
        form.classList.add("form-activ")
    })
})

startDate.addEventListener("click", function(){
    tituloform.classList.add("formtitnone");
    formul.classList.add("formtext-none");

    calendario.classList.add("Act")
})

// CERRAR FORMULARIO
const cerrar = document.querySelector(".cerrar")

cerrar.addEventListener("click", () => {
    form.classList.remove("form-activ")
    tituloform.classList.remove("formtitnone");
    formul.classList.remove("formtext-none");
    calendario.classList.remove("Act")
})

// MES ANTERIOR Y POSTERIOR
const posterior = document.querySelector(".pos");
const anterior = document.querySelector(".ant");
const diasCreated = document.querySelectorAll(".dias p");

anterior.addEventListener("click", () => {
    for(i = 1; i < meses.length; i++){
        // ESCRIBE MES ACTUAL Y RECOGE LOS DIAS SEGUN DATOS EN JSON
        mesHoy--;
        let mes = meses[mesHoy]
        let diasCont = mes.dias
        mesActual.innerHTML = mes.nombre;

        //BORRAR DIAS ANTERIORES
        for(i = 0; i < diasCont.length; i++){
           let dia =document.querySelector(".dias p");
            contenedorDias.removeChild(dia);
        }

        //BUCLE PARA CREAR DIAS 
        for(i = 0; i < diasCont.length; i++){
            let dia = document.createElement("p");
            dia.innerHTML = diasCont[i];
            contenedorDias.appendChild(dia);
        }
    }
})

posterior.addEventListener("click", () => {
    for(i = 1; i < meses.length; i++){
        // ESCRIBE MES ACTUAL Y RECOGE LOS DIAS SEGUN DATOS EN JSON
        mesHoy++;
        let mes = meses[mesHoy]
        let diasCont = mes.dias
        mesActual.innerHTML = mes.nombre;
        console.log(mes.dias)

        //BORRAR DIAS ANTERIORES
        for(i = 0; i < diasCont.length; i++){
            let dia =document.querySelector(".dias p");
            contenedorDias.removeChild(dia);
        }

        //BUCLE PARA CREAR DIAS 
        for(i = 0; i < diasCont.length; i++){
            let dia = document.createElement("p");
            dia.innerHTML = diasCont[i];
            contenedorDias.appendChild(dia);
            console.log(dia)
        }
    }
})

// FINALIZAR RESERVA
const reservado = document.querySelector(".reservado")

diasCreated.forEach(day => {
        day.addEventListener("click", () => {
        reservado.classList.add("activarRes")

        form.classList.remove("form-activ")
        tituloform.classList.remove("formtitnone");
        formul.classList.remove("formtext-none");
        calendario.classList.remove("Act")
    })
})

// CERRAR MENSAJE
const close = document.querySelector(".reservado i")

close.addEventListener("click", () => {
    reservado.classList.remove("activarRes")
    form.classList.remove("form-activ")
    tituloform.classList.remove("formtitnone");
    formul.classList.remove("formtext-none");
    calendario.classList.remove("Act")
})




