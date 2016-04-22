document.getElementById('chkboxpregnant').onclick = function() {
    toggleSub(this, 'hidedivpregnant');
};
function toggleSub(box, id) {
    var el = document.getElementById(id);    
    if ( box.checked ) {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}

document.getElementById('chkboxmasked').onclick = function() {
    toggleSub(this, 'hidedivmasked');
};
function toggleSub(box, id) {
    var el = document.getElementById(id);    
    if ( box.checked ) {
        el.style.visibility = 'hidden';
    } else {
        el.style.visibility = 'visible';
    }
}
