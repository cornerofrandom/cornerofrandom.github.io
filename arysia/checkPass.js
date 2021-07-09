var challenge = document.getElementById("challenge");
var main = document.getElementById("main");
var magicInfo = document.getElementById("magicInfo");

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
function checkVisitor(){
    if (storageAvailable("localStorage")) {
        pass = window.localStorage.getItem("Arysia_KEY");
        if (pass === "PASSED"){
            challenge.className="inactive";
            checkPage();
            //window.alert("Welcome back.");
        }
    }
}
function checkPage(){
    if(window.location.hash){
        var hash = window.location.hash;
        if (hash === "#magicInfo"){
            window.alert("magic")
            main.classList.add("inactive");
            main.classList.remove("active");
            magicInfo.classList.add("active");
            magicInfo.classList.remove("inactive");
        } else {
            main.classList.add("active");
            main.classList.remove("inactive");
        }
        }
        else {
            main.classList.add("active");
            main.classList.remove("inactive");
    }
}

document.getElementById("editor").addEventListener("input", function() {

    entered = document.getElementById("editor").innerHTML;
    if (entered === "pain"){
        document.getElementById("edited").innerHTML = "lol, yeah same."
    } else if (entered === "bruh"){
        document.getElementById("edited").innerHTML = "no u"
    } else if (entered === "nothing"){
        document.getElementById("edited").innerHTML = "well you better have something to say, or leave"
    } else if (entered === "what"){
        document.getElementById("edited").innerHTML = "at this point you're just putting in random crap aren't you?"
    } 
    else if (entered === "FHAmeris7"){
        challenge.className="inactive";
        main.classList.add("active");
        main.classList.remove("inactive");
        window.alert("Welcome");
        if (storageAvailable("localStorage")) {
        window.localStorage.setItem("Arysia_KEY", "PASSED");
        }
    } else{
        document.getElementById("edited").innerHTML = "";

        checkPage();
    }

}, false);
5











