//Script de bloquear control shift i ou o botao direito do mouse, retirei do meu site

window.onkeydown = function() {
    var key = event.keyCode || event.charCode || e.which;
    if (key == 17) {
        alert("É proibido inspecionar a página.")
        //window.open("https://omg.sprayx.dev")
        return false;
    }

}

window.onload = function() {

    document.oncontextmenu = function() {
        alert("É proibido inspecionar a página.")
        //window.open("https://omg.sprayx.dev")
        return false;
    }
}
