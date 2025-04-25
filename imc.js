const bienvenida = 'Bienvenido a la calculadora de indice de masa corporal';
const resultado = 'Su indice de masa corporal es:'
const mensaje = 'Basandonos en ese resultado su estado dentro del IMC es:';
const mensaje2 = 'Algo salió mal'
const registroG = 'El registro de hombres y mujeres es:'
const menores = 'El total de menores registrados es: '
const menSobrepeso = 'El total de hombres y mujeres con sobrepeso es: '
const menMenorIMC = 'El paciente con el menor IMC es:'
alert(bienvenida);
let running = true;
let mujeres = 0;
let hombres = 0;
let mujeressobre = 0;
let hombressobre = 0;
let menoresedad = 0;
let pacientes = [];
let pacienteinfo = [[]];
do{
    let option = prompt('Opciones de Menu\n 1. Registar Paciente.\n 2. Informe total registrados.\n 3. Informe del promedio de edad registrada.\n 4. Informe total de menores registrados.\n 5. Informe de pacientes con Sobrepeso.\n 6. Informe del paciente con el IMC mas bajo.\n 7. Salir.')
    switch (option) {
        case "1":
            let id = prompt('Ingrese su ID')
            let nombre = prompt('Ingrese su nombre');
            let edad = prompt('Ingrese su edad');
            let genero = prompt("Ingrese su genero: \n 1. Hombre \n 2. Mujer");
            let peso = prompt('ingrese su peso en Kilogramos');
            let estatura = prompt ('ingrese su estatura en Metros');
            let imc = peso / (estatura ** 2);
            alert(`${resultado}${imc}`);
            pacientes.push({id, nombre, edad, genero, imc});
            if (imc < 18.5){
                alert(`${mensaje} Peso inferior al normal`);
            } else if (imc >= 18.5 && imc <= 24.9 ){
                alert(`${mensaje} Normal`);
            } else if (imc >= 25 && imc <= 29.9){
                alert(`${mensaje} Peso superior al normal`);
            } else if (imc >30){
                alert(`${mensaje} Obesidad`);
            } else{
                alert(mensaje2)}
            if (genero == '1'){
                hombres += 1;
            }else if (genero == '2'){
                mujeres +=1;
            }
            if (edad < 18){
                menoresedad += 1;
            }
            if (genero == '1' && imc >= 25){
                hombressobre += 1;
            }else if (genero == '2' && imc >= 25){
                mujeressobre +=1;
            }
            pacienteinfo[0].push(pacientes);
            console.log(pacienteinfo);
            break;
        case"2":
            alert(`${registroG}\nHombres: ${hombres}\nMujeres: ${mujeres}`);
            break;
        case"3":
            let totalEdadH = 0 
            let totalEdadM = 0;
            let countH = 0 
            let countM = 0;
            for (let p of pacientes) {
                if (p.genero == '1') {
                    totalEdadH += parseInt(p.edad);
                    countH++;
                } else if (p.genero == '2') {
                    totalEdadM += parseInt(p.edad);
                    countM++;
                }
            }
            let promH = countH > 0 ? (totalEdadH / countH) : 0;
            let promM = countM > 0 ? (totalEdadM / countM) : 0;
            alert(`Promedio de edad\nHombres: ${promH}\nMujeres: ${promM}`);
            break;
        case"4":
            alert(`${menores} ${menoresedad}`);
            break;
        case"5":
            alert(`${menSobrepeso}\nHombres: ${hombressobre}\nMujer: ${mujeressobre}`);
            break;
        case"6":
            let menIMC = pacientes[0];
            for (let i = 1; i < pacientes.length; i++)
                if (pacientes[i].imc < menIMC.imc) {
                    menIMC = pacientes[i];
                }
            alert(`${menMenorIMC}\nID: ${menIMC.id}\nNombre: ${menIMC.nombre}\nEdad: ${menIMC.edad}\nGenero: ${menIMC.genero}\nIMC: ${menIMC.imc}`)
            break;
        case "7":
            alert("Adios!!");
            running = false
        
        default:
            alert(mensaje2)
            break;
    }
} while (running)
