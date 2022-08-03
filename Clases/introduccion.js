
6 / "3" // El resultado es 2. Se interpreta el string como un número porque solo contiene un número y se realiza la operación matemática.

"2" * "3" // El resultado es 6. Se interpretan ambos strings como un número y se realiza la operación matemática.

4 + 5 + "px" // El resultado es 9px. los dos primeros datos son numbers y se suman, el tercero es un string y se interpreta como tal porque contiene letras.

"$" + 4 + 5// El resultado es $45. Como el primer dato es un string se ejecuta como una concatenación.

"4" - 2 // El resultado es 2. Se interpreta el string como un número porque solo contiene un número y se realiza la operación matemática.

"4px" - 2// El resultado es NaN (Not a Number). Como el string contiene datos en letras además de números no se interpreta tal como un número.

7 / 0 // El resultado es Infinity. Porque el dividendo no tiene divisor para operar.

{}[0] // El resultado es undefined. Porque el objeto se encuentra vacío.

parseInt("09")// El resultado es 9. Porque parseInt convierte los números a enteros.

5 && 2 // El resultado es 2. El operador && devolverá el último valor si todos los demás valores son verdaderos.

2 && 5 // El resultado es 5. El operador && devolverá el último valor si todos los demás valores son verdaderos.

5 || 0 // El resultado es 5. El operador || devolverá el primer valor si todos los demás valores son verdaderos o el valor verdadero si los demás son falsos.

0 || 5 // El resultado es 5. El operador || devolverá el primer valor si todos los demás valores son verdaderos o el valor verdadero si los demás son falsos. En este caso el primer valor es falso (0)

[3]+[3]-[10] // El resultado es 23. Los primeros dos se concatenan y el tercero opera como resta.

3>2>1 // El resultado es false. comparador > no puede operar sobre dos valores al mismo tiempo. Una alternativa sería (3>2, 2>1) en ambos casos sería true

// [] == ![] // El resultado es true. En el comparador ambos son arrays vacíos

var profesor = "Jhoswe";
let teacher = "Jose";
if (true) {
    var profesor = "The Flash";
    let teacher = "Reverse Flash";
    console.log(profesor); // El resultado es "The Flash". La condicion if es verdadera, entonces se ejecuta el var dentro del if (entorno)
    console.log(teacher); // El resultado es "Reverse Flash". La condicion if es verdadera, entonces se ejecuta el var dentro del if (entorno)
}
console.log(profesor); // El resultado es "Jhoswe". En este console.log el programa ya salió de if, por lo tanto se ejecuta el var global.
console.log(teacher); // El resultado es "Jose". En este console.log el programa ya salió de if, por lo tanto se ejecuta el var global.