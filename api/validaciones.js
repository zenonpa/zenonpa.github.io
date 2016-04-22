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


 PatientPageonlynumber(e){
  $("#id_field_agetimeonsetreaction,#id_field_gestationperiodreactionevent,#id_field_bodyweight,#id_field_height,#id_field_neonatebodyweight,#id_field_neonateheight").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }   
});  
