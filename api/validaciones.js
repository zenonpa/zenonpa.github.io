function toggleSub1(box, idd) {
    var elements =document.querySelectorAll('[id^=\'' + idd +'\']');   
    if ( box.checked ) {
        for (var i=0; i<elements.length; i++) {
            elements[i].style.display = 'none';
        }                
    } else {
        for (var i=0; i<elements.length; i++) {
            elements[i].style.display = 'block';
        }                    
    }
}    
function toggleSub2(box, idd) {
    var elements =document.querySelectorAll('[id^=\'' + idd +'\']');
    if ( box.checked ) {
        for (var i=0; i<elements.length; i++) {
            elements[i].style.visibility = "hidden";
        }            
    } else {
        for (var i=0; i<elements.length; i++) {
            elements[i].style.visibility = "visible";
        }            
    }
}