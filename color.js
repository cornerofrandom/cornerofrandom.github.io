//preset colors that run in a cycle
var colors = [

    "#FFE4F5", 
    "#FFDDDD",
    "#FFE8D8",
    "#FFFCDD",
    "#E4FFDD",
    //"#DDFFF1", 
    "#D9FFFA",
    "rgb(201, 240, 253)", 
    "#DAD9FF", 
    //"#E8CAFF",
];
var colorIndex = 0;

function changeColor() {
    var col = document.getElementById("print");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    window.value = colors[colorIndex];
    document.getElementById("cardColor").innerHTML=window.value;
    colorIndex++;

    save();
}

//let the user pick a custom color from the color palette!
var colorpicker;
 
var defaultColor = window.localStorage.getItem("color");

window.addEventListener("load", startup, false);

function startup(){
    colorpicker =  document.querySelector("#colorpicker");
    colorpicker.value = defaultColor;
    colorpicker.addEventListener("input", updateFirst, false);
    colorpicker.addEventListener("change", updateAll, false);
}

function updateFirst(event) {
   var p = document.getElementById("print");
   window.value = event.target.value;
   document.getElementById("cardColor").innerHTML=window.value;
   if (p) {
     p.style.backgroundColor = event.target.value;
     save();
   }
 }
 function updateAll(event) {
   window.value = event.target.value;
   document.getElementById("cardColor").innerHTML=window.value;
   document.getElementById("print").forEach(function(p) {
   p.style.backgroundColor = event.target.value;

   save();
   });
 }

