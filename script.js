
 document.getElementById("changeback").style.display = "none";
 document.getElementById("changebtn").style.display = "block";
 document.getElementById("unrh").style.display = "none";
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
    document.getElementById("unrh").style.display = "block";
    document.getElementById("unrb").style.display = "none";
}
function unrh(){
    document.getElementById("unrh").style.display = "none";
    document.getElementById("unrb").style.display = "block";
}

function sqircleClick(){
    window.alert("you clicked the sqircle !!");
}

function alrt(){
    alert("ATTENTION: you are entering a corner of random. Beware of extreme levels of randomness. You have been warned...")
}

//canvas
draw=function(){
    stroke(mouseX, 0, mouseY);
    fill(mouseX,mouseY,mouseX+mouseY)
    ellipse(mouseX, mouseY, mouseX/5, mouseX/5);
    
}

