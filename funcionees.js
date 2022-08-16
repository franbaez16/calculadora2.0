//en todas las funciones que se relizaran dentro de este codigo se utiliza let y no var ya que let funciona de manera local, es decir que las variables que se definan con let solo podran ser utlizadas dentro de llaves{}

//Suma prompt. En esta funcion se le pedira al usuario dos valores los cuales luego de que el programa los resiba los sumara y le dara al usuario el resultado
alert ("Calculadora multifuncion")
alert ("Si quiere utilizar la funcion suma seleccione continuar y a continuacion escriba suma. Si quiere hacer uso de las demas utilidades como calculadora, suma predeterminada o sacar su nota promedio seleccione cancelar sucesivamente. Tenkiuuu<33 ")
let respuesta = prompt("Escriba suma.") 

if  (respuesta == "suma");{
let num1 = parseFloat (prompt("Ingrese un valor")); //al hacer uso de la funcion prompt en esta funcion, aparecera un cuadro de dialogo con un mensaje en este caso "ingrese un valor" en donde se le pedira al usuario una respuesta que en este caso debe ser un numero(lo cual se define gracias a parseFloat)

let num2 = parseFloat (prompt("Ingrese un valor")); //parseFloat lo que hace es que la respuesta del usuario sea de caracter numerico decimal
let resultado = (num1 + num2)
alert(""+ resultado)

}


//suma predeterminada
//en esta suma se le pide al usuario dos elementos de caracter numerico decimal, luego esos dos elementos se sumaran y se mostraran en la pagina principal como resultado<33
{
    function sumador(){//sumador indica la funcion que se realizara
        let x,y,sumador,text;//se definen las variables con let
        x = document.getElementById("num1").value; //a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico 
        y = document.getElementById("num2").value;
        sumador = parseFloat(x) + parseFloat(y);//se indica cual sera la funcion que se realizara en este caso x e y son de caracter decimal numerico y se van a sumar
        text = sumador;
        console.log(x)
        document.getElementById("resultado").innerHTML = text //a traves del innerHTML el resultado se mostrara en la pagina principal
    }
}



//nota promedio
function promedio(){//promedio indica la funcion
let nota1, nota2, nota3, suma, promedio,text, notadesaprobado, notaaprobado//se definen las variables
    nota1= document.getElementById("nota1").value;//a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico 
    nota2= document.getElementById("nota2").value;
    nota3= document.getElementById("nota3").value;
    suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    promedio = suma / 3;
    text = promedio;
    document.getElementById("promedio").innerHTML = text//el resultado del promedio se mostara en la pagina principal

    if(promedio >= "7" && "10"){
        alert("Aprobaste la materia con; " + promedio);//el alert indica que se le indicara al usuario si desaprobo o aprobo la materia pero no en la pagina principal sino en un cuadro de dialogo 
       
    }
    else{
        alert("desaprobaste la materia con; " + promedio);
    }
}



//calculadora(suma,resta,multiplicacion y division)
{
function suma(){
    let x,y,sumador,text;
    x = document.getElementById("Num1").value;//a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico
    y = document.getElementById("Num2").value;
    sumador = parseFloat(x) + parseFloat(y);
    text = sumador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text//el resulatdo se mostara en la pagina principal
}

function resta(){
    let x,y,restador,text;
    x = document.getElementById("Num1").value;//a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico
    y = document.getElementById("Num2").value;
    restador = parseFloat(x) - parseFloat (y);
    text = restador;
    document.getElementById("Resultado").innerHTML = text//el resulatdo se mostara en la pagina principal
}
}


function division(){
    let x,y,text, divisor
    x = document.getElementById("Num1").value;//a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico
    y = document.getElementById("Num2").value;
    divisor = parseFloat(x) / parseFloat(y);
    text = divisor;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text //el resulatdo se mostara en la pagina principal
}


function multiplicacion(){
    let x,y,text,multiplicador
    
    x = document.getElementById("Num1").value;
    y = document.getElementById("Num2").value;//a traves del document.getElementById se indica que el valor que se encuentra entre los parentesis sera unico
  multiplicador = parseFloat(x) * parseFloat(y);
    text = multiplicador;
    console.log(x)
    document.getElementById("Resultado").innerHTML = text//el resulatdo se mostara en la pagina principal
}




