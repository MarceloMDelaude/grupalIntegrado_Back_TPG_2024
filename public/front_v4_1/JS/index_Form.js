
//form
function validateForm(event)
{
event.preventDefault();

  //inputs
let usuario = document.getElementById("usuario").value;
let email = document.getElementById("email").value;

if(usuario.trim() === " ")
    {
    alert("por favor ingresa un usuario");
    return false; // EVITA QUE SE ENVIE EL FORMULARIo
    }

if(email.trim() === "")
    {
    alert("por favor ingresa un mail"); //si el campo esta vacio, no valida, si tiene algo, si.
    return false;
    }

if(!isValidEmail(email))
    {
    alert("Por favor ingresa un MAIL VALIDO");
    return true;
    }
}