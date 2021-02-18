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
    colorIndex++;
}



function print(){


html2canvas(document.querySelector("#print")).then(canvas => {
    //document.body.appendChild(canvas); //adds the "screenshot" to the webpage, which we don't need
    var img = canvas.toDataURL("image/png")
    var win = window.open();
    win.document.write("<p>you can save this as an image to your desktop. <br> didn't render properly? <del>yeah html2canvas kinda sucks</del> try saving and reloading the biomaker website, then try again. </p><img src='"+img+"'/>")
});
}


//SAVE/LOAD THE USER'S WORK, USING localStorage
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && (storage && storage.length !== 0);
    }
}

//editableDiv = document.getElementById("edited"); // get the editable div
 // get the editable div

function save() { // this function will be executed whenever the content of the editableDiv changes
    if (storageAvailable("localStorage")) {
        document.getElementById("sStatus").innerHTML="saving.."

        nameDiv = document.getElementById("name"); //fetch each div and assign it a name
        descDiv = document.getElementById("desc");
        bDiv = document.getElementById("birthday");
        lDiv = document.getElementById("likes");
        dlDiv = document.getElementById("dislikes");
        aboutDiv = document.getElementById("about");


        uname = nameDiv.innerHTML; //get the content of the div
        window.localStorage.setItem("name", uname); //save the content

        desc = descDiv.innerHTML;
        window.localStorage.setItem("desc", desc);
        b = bDiv.innerHTML;
        window.localStorage.setItem("b", b);
        l = lDiv.innerHTML;
        window.localStorage.setItem("l", l);
        dl = dlDiv.innerHTML;
        window.localStorage.setItem("dl", dl);
        about = aboutDiv.innerHTML;
        window.localStorage.setItem("about", about);

        var d = new Date()
        document.getElementById("sStatus").innerHTML="<span style='color: green'>saved.</span> <br>"+d;
    } else { // if localStorage is not supported, notify the user about it
        alert("Error saving: your browser does not support localStorage, or it was disabled.");
    }
}



 function retrieve() { // this function is executed whenever the page is loaded
    if (storageAvailable("localStorage")) {

        nameDiv = document.getElementById("name");
        descDiv = document.getElementById("desc");
        bDiv = document.getElementById("birthday");
        lDiv = document.getElementById("likes");
        dlDiv = document.getElementById("dislikes");
        aboutDiv = document.getElementById("about");

        uname = window.localStorage.getItem("name");
        desc = window.localStorage.getItem("desc");
        b = window.localStorage.getItem("b");
        l = window.localStorage.getItem("l");
        dl = window.localStorage.getItem("dl");
        about = window.localStorage.getItem("about");

        if (uname === null) { // if the user never modified the divcontent before (or cleaned his localStorage), do nothing
            var d = new Date()
        document.getElementById("sStatus").innerHTML="<span style='color: red'>no saved data.</span> <br>" +d;
        } else {
            nameDiv.innerHTML = uname; // write it into the editableDiv
            descDiv.innerHTML = desc;
            bDiv.innerHTML = b;
            lDiv.innerHTML = l;
            dlDiv.innerHTML = dl;
            aboutDiv.innerHTML = about;
            var d = new Date()
        document.getElementById("sStatus").innerHTML="<span style='color: green'>saved data was loaded.</span> <br>" + d;
        }
    } else { // if strorage not available, notify the user
        alert("local storage is not available on your browser.");
    }
 }

 function reset() {

    let reset = confirm("This will delete all of your saved data. Deleted data is irretrievable. Are you sure you want to proceed?");
    if (reset){
        localStorage.clear();
        location.reload();
        return;
    }
    else {
        return;
    }
 }

 function ccf(){
    var col = document.getElementById("print");
    var colorcode = document.getElementById("ccc");
    var hex = colorcode.innerHTML;
    try {col.style.backgroundColor = `${hex}`;}
    catch {
        alert('the color you entered was invalid, please try again and make sure you put # before your hex code!')
    }
 }
