document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("znavbar").style.visibility = "hidden";
    document.getElementById('chkboxpregnant').onclick = function() { toggleMostrar(this, "preg" ); };
    document.getElementById('chkboxmasked').onclick = function() {   toggleMostrarInputs(this, "mask");  };    


    function toggleMostrar(box, idd) {
        var elements =document.querySelectorAll('[id^=\'' + idd +'\']');   
        if ( box.checked ) {
            for (var i=0; i<elements.length; i++) {
                elements[i].style.display = 'none';
            }                
        } else {
            for (var i=0; i<elements.length; i++) {
                elements[i].style.display = 'block';
            }                    
        }    }    

    function toggleMostrarInputs(box, idd) {
        var elements =document.querySelectorAll('[id^=\'' + idd +'\']');
        if ( box.checked ) {
            for (var i=0; i<elements.length; i++) {
                elements[i].style.visibility = "hidden";
            }            
        } else {
            for (var i=0; i<elements.length; i++) {
                elements[i].style.visibility = "visible";
            }            
        }    }    




});


