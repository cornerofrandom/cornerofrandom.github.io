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
            document.getElementById("challenge").className = "inactive";
            document.getElementById("main").className = "active";
            checkPage();
            //window.alert("Welcome back.");
        }
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
        document.getElementById("challenge").className="inactive";
        document.getElementById("main").className="active";
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
function checkPage(){
    if(window.location.hash){
        var hash = window.location.hash.substring(1);
        if (hash === "magicInfo"){
            document.getElementById("main").className="inactive";
            document.getElementById("magicInfo").className="active";
        }
        else {
            document.getElementById("challenge").className = "inactive";
            document.getElementById("main").className = "active";
        }
    }
}