/* Explicacion en video 31(43) de integración Back con Front
    en la arrow function, hace referencia a todos los ID del Form.
*/
document.addEventListener("DOMContentLoaded", ()=>{
    const mostrarCrearUsuarioFormBtn = document.getElementById("mostrarCrearUsuarioFormBtn");
    const crearUsuarioForm = document.getElementById("crearUsuarioForm");
    const editarUnUsuarioForm = document.getElementById("editarUnUsuarioForm");
    const listarUsuariosBtn = document.getElementById("listarUsuariosBtn");
    const listaUsuarios = document.getElementById("listaUsuarios");

    //mostrar u ocultar el Form de la creacion de usuario
    mostrarCrearUsuarioFormBtn.addEventListener("click",() => {
        crearUsuarioForm.classList.toggle("hidden");
    });

});







//listar todos los usuarios

listarUsuariosBtn.addEventListener("click", listarUsuarios);

async function listarUsuarios(){
    const response = await fetch("/usuarios"); 
    const usuarios = await response.json();
    listaUsuarios.innerHTML=''; //limpia la lista de usuarios.

    usuarios.forEach(usuario => {

        const li = document.createElement('li');
        li.innerHTML = '
            <span> Id: $(usuario.Id), Nombre: $(usuario.Nombre), Apellido: $(usuario.Apellido), Email: $(usuario.Email) </span>
            <div class="actions">
                <button class="update" data-Id="$(usuario.Id)" data-nombre="$(usuario.nombre)"  data-apellido="$(usuario.apellido)" data-mail="$(usuario.mail)" >Actualizar Usuario.</button>
                <button class="delete" data-Id="$(usuario.Id)"> Borrar Usuario.</button>

        // VER video 29 minuto 38....

            </div>
        '; 
        listarUsuarios.appendChild(li);
    });



};




