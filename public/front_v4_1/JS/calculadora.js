// Aca creamos las variables para almacenar los num1 y num2 y la operacion
let operando1 = ("");
let operando2 = ("");
let operacionActual = '';

// Generar los botones de los números conn un For
for (let i = 0; i <= 9; i++) {
    const boton = document.createElement('button');
    boton.innerText = i;
    boton.onclick = () => agregarNumero(i);
    document.getElementById('numeros').appendChild(boton);
}
//Aca agregamos los numeros 
const agregarNumero = (numero) => {
    if (operacionActual) {
        operando2 += numero;
    } else {
        operando1 += numero;
    }
    actualizarDisplay();
};

const operacion = (operacion) => {
    if (operando1 && !operando2) {
        operacionActual = operacion;
        actualizarDisplay();
    }
};

const calcular = () => {
    if (operando1 && operando2 && operacionActual) {
        const num1 = parseFloat(operando1);
        const num2 = parseFloat(operando2);
        let resultado;

        switch (operacionActual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = 'Error: División por cero';
                }
                break;
        }

        operando1 = resultado.toString();
        operando2 = '';
        operacionActual = '';
        actualizarDisplay();
    }
};

const limpiar = () => {
    operando1 = '';
    operando2 = '';
    operacionActual = '';
    actualizarDisplay();
};

const actualizarDisplay = () => {
    document.getElementById('display').value = operando1 + ' ' + operacionActual + ' ' + operando2;
};
