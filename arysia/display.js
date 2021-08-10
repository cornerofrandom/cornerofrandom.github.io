const delayTime = 350;
var currentDisplay;
var newCurrent;
var currentPage = 'main';

function changeActive(currentDisplay, newCurrent){
  const current = document.getElementById(currentDisplay);
  current.style.opacity = "0";
  currentPage = newCurrent;
  setTimeout(() => {
    current.style.display = "none";
    const replace = document.getElementById(newCurrent);
    replace.style.display = "block";
    setTimeout(() => {
      replace.style.opacity = "1";
      current.classList.add("inactive");
      current.classList.remove("active");
      replace.classList.add("active");
      replace.classList.remove("inactive");
    }, 50);
  }, delayTime);
}


function checkPage(){
  if(window.location.hash){
      var hash = window.location.hash;
      if (hash === "#magicInfo"){
          changeActive(currentPage, 'magicInfo');
        } else if (hash ==="#nationsInfo"){
          changeActive(currentPage, 'nationsInfo');
        } else if (hash ==="#housesInfo"){
          changeActive(currentPage, 'housesInfo');
        } else {
            changeActive(currentPage, 'main');
        } 

      }
      else {
          changeActive(currentPage, 'main');
  }
}
window.addEventListener('hashchange', function(){
  checkPage();
})
/*function displayMagicInfo(){
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

*/