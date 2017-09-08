/*aquí va tu código*/
var comentarios = document.getElementById("comentarios");
if(localStorage.length)
{
    var arreglo = localStorage.getItem("arreglo");
    arreglo = JSON.parse(arreglo);
}
else
{
    var arreglo = [];
}

for(var i in arreglo)
{
    var div = document.createElement("div");
    div.className = "cadaComentario";
    comentarios.appendChild(div);
    var nombre = document.createElement("h1");
    nombre.textContent = arreglo[i].nombre;
    var comentario = document.createElement("p");
    comentario.textContent = arreglo[i].comentario;
    div.appendChild(nombre);
    div.appendChild(comentario);
}
function guardarDatos()
{
    var clave = document.getElementById("clave");
    var valor = document.getElementById("valor");
    arreglo.push({nombre: clave.value, comentario: valor.value});
    localStorage.setItem("arreglo", JSON.stringify(arreglo));
    clave.value = "";
    valor.value = "";
    clave.focus();
    recuperarDatos();
}
function recuperarDatos()
{
    arreglo = localStorage.getItem("arreglo");
    arreglo = JSON.parse(arreglo);
    var div = document.createElement("div");
    div.className = "cadaComentario";
    var nombre = document.createElement("h1");
    nombre.textContent = arreglo[arreglo.length-1].nombre;
    var comentario = document.createElement("p");
    comentario.textContent = arreglo[arreglo.length-1].comentario;
    if((nombre.textContent != "") && (comentario.textContent != ""))
    {
        div.appendChild(nombre);
        div.appendChild(comentario);
        comentarios.appendChild(div);
    }
}

function limpiarDatos()
{
    while(comentarios.childElementCount != 0)
    {
        comentarios.removeChild(comentarios.firstElementChild);
    }
    localStorage.clear();
    arreglo = [];
}