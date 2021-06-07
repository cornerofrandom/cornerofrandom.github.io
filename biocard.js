//listen for changes to any of the sections of the bio-card
document.getElementById("name").addEventListener("input", function() {
    save();
}, false);
document.getElementById("desc").addEventListener("input", function() {
    save();
}, false);
document.getElementById("birthday").addEventListener("input", function() {
    save();
}, false);
document.getElementById("likes").addEventListener("input", function() {
    save();
}, false);
document.getElementById("dislikes").addEventListener("input", function() {
    save();
}, false);
document.getElementById("about").addEventListener("input", function() {
    save();
}, false);

//check to make sure that localStorage is available
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



function save() { // this function will be executed whenever the content of the editableDiv changes
    if (storageAvailable("localStorage")) {
        document.getElementById("sStatus").innerHTML="<span style='color: yellow;'>Saving..</span>"

        nameDiv = document.getElementById("name"); //fetch each div and assign it a name
        descDiv = document.getElementById("desc");
        bDiv = document.getElementById("birthday");
        lDiv = document.getElementById("likes");
        dlDiv = document.getElementById("dislikes");
        aboutDiv = document.getElementById("about");
        color = document.getElementById("cardColor");

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
        cc = color.innerHTML;
        window.localStorage.setItem("color", cc);


        var d = new Date()
        var str = d.toString();
        var short = str.substring(0,34);
        document.getElementById("sStatus").innerHTML="<span style='color: green'>Saved.</span>";
        document.getElementById("date").innerHTML=short;

        window.localStorage.setItem("lastSave", short);
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
        color = document.getElementById("print");
        

        uname = window.localStorage.getItem("name");
        desc = window.localStorage.getItem("desc");
        b = window.localStorage.getItem("b");
        l = window.localStorage.getItem("l");
        dl = window.localStorage.getItem("dl");
        about = window.localStorage.getItem("about");
        cc = window.localStorage.getItem("color");

        if (uname === null) { // if the user never modified the divcontent before (or cleaned his localStorage), do nothing
        document.getElementById("sStatus").innerHTML="<span style='color: red'>No saved data.</span>";
        
        //document.getElementsByName("date").innerHTML=short;
        } else {
            nameDiv.innerHTML = uname; // write it into the editableDiv
            descDiv.innerHTML = desc;
            bDiv.innerHTML = b;
            lDiv.innerHTML = l;
            dlDiv.innerHTML = dl;
            aboutDiv.innerHTML = about;
            color.style.backgroundColor = cc;

            p = document.getElementById("cardColor")
            p.innerHTML = cc;
            var d = new Date()
            var str = d.toString();
           // var short = str.substring(0,34);
        document.getElementById("sStatus").innerHTML="<span style='color: green'>Saved data was loaded.</span>";
        document.getElementById("date").innerHTML = "Last saved: \n" + window.localStorage.getItem("lastSave");
        //document.getElementById("date").innerHTML=short;
        }
    } else { // if strorage not available, notify the user
        alert("Local storage is not available on your browser. Data was not saved.");
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





  function openNav() {
    document.getElementById("sidebar").style.visibility = "visible";


  }
  
  function closeNav() {
    document.getElementById("sidebar").style.visibility = "hidden";
  }

  function hideBD(){
      document.getElementById("boxBD").style.visibility="hidden";
  }
