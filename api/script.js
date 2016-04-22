document.addEventListener('DOMContentLoaded', function () {
    //document.getElementById("znavbar").style.visibility = "hidden";
    document.getElementById('chk_pregnant').onclick = function() { toggleMostrar(this, "preg" ); };
    document.getElementById('chk_masked').onclick = function() {   toggleMostrarInputs(this, "mask");  };    
    document.getElementById('chk_E2BCodes').onclick = function() {   toggleMostrarE2BCodes(this);  };    
    localStorage.setItem("hideLBLCodes","-1");
    ValidarE2BCodes();
 

    function toggleMostrarE2BCodes(box) {
        if ( box.checked ) {
            localStorage.setItem("hideLBLCodes","1")
        } else {
            localStorage.setItem("hideLBLCodes","0")
        }    
        ValidarE2BCodes();                      }  
    function ValidarE2BCodes(){
        var LBLCodes =document.querySelectorAll('[class*="lbl_e2bcodes"]');   
        if (localStorage.getItem("hideLBLCodes") === "0"){
            for (var i=0; i<LBLCodes.length; i++) {
                LBLCodes[i].style.display = 'none';
            }         
        }else{
            for (var i=0; i<LBLCodes.length; i++) {
                LBLCodes[i].style.display = 'inline-block';
            }                     
        }             }  

    function toggleMostrar(box, idd) {
        var elements =document.querySelectorAll('[id^=\'' + idd +'\']');   
        if ( box.checked ) {
            for (var i=0; i<elements.length; i++) {
                elements[i].parentNode.style.display = 'none';
            }                
        } else {
            for (var i=0; i<elements.length; i++) {
                elements[i].parentNode.style.display = 'block';
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


