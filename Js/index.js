(function(){
    var lista = document.getElementById("lista"),
        TextTarea = document.getElementById("TextTarea"),
        Enviar = document.getElementById("Button");
    //Funciones
    var EnviarMensaje = function(){
        var Mensaje = TextTarea.value,
            NuevoMensaje = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(Mensaje);
        
    if (Mensaje === "") {
        TextTarea.setAttribute("placeholder", "No Escribiste Ningun Mensaje");
        TextTarea.className = "error";
			return false;
    }
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        NuevoMensaje.appendChild(enlace);
        lista.appendChild(NuevoMensaje);
        TextTarea.value = "";
    
    for(var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removerChid(this);
        });
    }

};
var comprobarMensaje = function(){
    TextTarea.className = "";
    TextTarea.setAttribute("placeholder", "Agregar Mensaje");
};
//Eventos
    Enviar.addEventListener("click", EnviarMensaje);
    
    TextTarea.addEventListener("click", comprobarMensaje);
    
    for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());