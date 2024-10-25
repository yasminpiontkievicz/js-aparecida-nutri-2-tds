var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector (".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

     if(peso <= 0 || peso >=1000){ // || ou
        console.log("peso invalido!");
        pesoEhValido  = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
     }

     if(altura <= 0 || altura >=3.00){  // || ou
        console.log("altura invalida!");
        alturaEhValido  = false;
        tdImc.textContent = "altura invalida!";
        paciente.classList.add("paciente-invalido");
     }

     if(alturaEhValida && pesoEhValido){  // && e
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
     }

    }
