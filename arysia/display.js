const delayTime = 350;

function displayMagicInfo(){
    const main = document.getElementById("main");
    main.style.opacity = "0";
    
  setTimeout(() => {
    main.style.display = "none";
    const info = document.getElementById("magicInfo");
    info.style.display = "block";
    setTimeout(() => {
      info.style.opacity = "1";
      main.classList.add("inactive");
      main.classList.remove("active");
      info.classList.add("active");
      info.classList.remove("inactive");
    }, 50);
  }, delayTime);

}

function displayNationsInfo(){
  const main = document.getElementById("main");
  main.style.opacity = "0";
  
setTimeout(() => {
  main.style.display = "none";
  const info = document.getElementById("nationsInfo");
  info.style.display = "block";
  setTimeout(() => {
    info.style.opacity = "1";
    main.classList.add("inactive");
    main.classList.remove("active");
    info.classList.add("active");
    info.classList.remove("inactive");
  }, 50);
}, delayTime);

}

function displayHome(){

  var hash = window.location.hash.substring(1);
  const current = document.getElementById(hash);
  current.style.opacity="0";
setTimeout(() => {
  current.style.display = "none";
  const main = document.getElementById("main");
  main.style.display = "block";
  setTimeout(() => {
    main.style.opacity = "1";
    current.classList.add("inactive");
    current.classList.remove("active");
    main.classList.add("active");
    main.classList.remove("inactive");
  }, 50);
}, delayTime);

}