window.onkeydown = function() {
   var key = event.keyCode || event.charCode || e.which;
   if(key==17){ alert('stay mad.'); return false; }
   
}

window.onload = function() {

            document.oncontextmenu = function() {
                window.open("https://omg.sprayx.dev")
                return false;
            }
        }
