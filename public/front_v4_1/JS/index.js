alert("Calculemos la edad. Usted ingrese primero el año mayor, por favor.");
let numA = parseFloat(prompt("Ingrese el Año actual o futuro."));
let numB = parseFloat(prompt("Excelente!! Ahora vas a ingresar el año de nacimiento o el punto de partida."));

function sumar(numA, numB){
    let suma = numA + numB;
    return suma;
}
let restar = (numA, numB) => numA-numB;

document.write(`<h2> La edad calculada o el tiempo de vida estimado, desde el año:  ${numA}  y el  ${numB}
 es de:  ${restar(numA, numB)} años.</h2>`);

if(numA >Date)  //NO esta funcionando el if, porque no lo puedo comparar con el año actual.
{
    document.write("<h2>El tiempo futuro sera igual a: </h2>"+ restar);
    alert("El tiempo futuro sera igual a: "+ restar);
}else{
    alert("La edad actual es: " + restar(numA, numB) + " años.");
}
//document.write(`<h3> La suma del numero  ${numA}  y el numero  ${numB} 
// es:  ${sumar(numA, numB)}</h3>`);


