
 document.getElementById("changeback").style.display = "none";
 document.getElementById("changebtn").style.display = "block";
 document.getElementById("unr").style.display = "none";
function change(){
    document.getElementById("changeme").innerHTML = "The paragraph changed.";
    document.getElementById("changebtn").style.display = "none";
    document.getElementById("changeback").style.display = "block";
}
function changeback(){
    document.getElementById("changeme").innerHTML = "A paragraph.";
    document.getElementById("changebtn").style.display = "block";
    document.getElementById("changeback").style.display = "none";
}
function unr(){
    document.getElementById("unr").style.display = "block";
    document.getElementById("unrb").style.display = "none";
}


alert("ATTENTION: you are entering a corner of random. Beware of extreme levels of randomness. You have been warned...")