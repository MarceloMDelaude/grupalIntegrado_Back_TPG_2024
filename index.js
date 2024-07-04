/*-------SERVIDOR ESTATICO CON EXPRESS */
let port = 3306;
const express = require("express");
const app = express();
const usuariosRouter = require("./routes/usuarios");
const path = require("path");


app.use(express.json());

app.use("./usuarios",usuariosRouter);

/* muestra la conexión a la DB por el puerto local
app.get("/", (req,res) => 
{
    res.send("HOLA, ESTAMOS DESDE EL PUERTO LOCALHOST:3306");
});
*/

app.use(express.static(path.join(__dirname,"public")));
//en una carpeta statica cuyo nombre directorio es public, tendremos todo el Front.


app.listen(port , () =>
{
  console.log(`Servidor ejecutado correctamente en puerto ${port}`)  
});  //`backstrike` para armar sin concatenar.


