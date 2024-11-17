const leer = require ('prompt-sync')()
const Escribir = console
class Condicon{}
   mayorDosNumeros()
    let num1,num2
    num1=0; num2=0
    num1= Leer("Ingrese numero1")
    num2= Leer("Ingrese numero2")
    num1= parseInt(num1)
    num2= parseInt(num2)
    if ( num1 > num2 ) {
      Escribir.log (num1, "Es mayor que" , num2)  
    }
    else{
        if ( num2 > num1){
           Escribir.log(num2, "Es mayor que" , num1) 
        }
        else{
            Escribir.log( num2, "Es igual a" , num1)
        }
    }
//Ejercicio de días de la semana  
diaSemana() 
    let dia=0
    dia = Leer("Ingrese numero de dia:")
    dia = parseInt(dia)
    switch (dia){
        case 1:
            Escribir.log(dia, "Lunes")
            break
        case 2:
            Escribir.log(dia, "Martes")
            break 
        case 3:
           Escribir.log(dia, "Miercoles")
           break
        case 4:
           Escribir.log(dia, "Jueves")
           break 
        case 5:
           Escribir.log(dia, "Viernes")
           break 
            
        case 6:
           Escribir.log(dia, "Sabado")
           break 
        case 7:
           Escribir.log(dia, "Domingo")
           break 
        default:
           Escribit.log("Dia incorrecto")
           break
    }
  
     

//Ejercicios de ciclos

  ciclos()
    let nombre
    let contador
    nombre ="";contador=1
    nombre= leer("Ingrese nombre:")
    Escribir.log("Ciclo Mientras (while)")
    while (contador <=5) {
        Escribir.log(contador, " ",nombre)
        contador=contador+1
    }
    Escribir.log("Ciclo para (for)")
    for (contador=1; contador<=5; contador++) {
        Escribir.log(contador, "", nombre)

    }
 

const condicion = new Condicion()
condicion.mayorDosNumeros()
condicion.ciclos()
condicion.diaSemana()
