function displayMagicInfo(){
    const main = document.getElementById("main");
    main.style.opacity = "0";
    
  setTimeout(() => {
    main.style.display = "none";
    const magicInfo = document.getElementById("magicInfo");
    magicInfo.style.display = "block";
    setTimeout(() => {
      magicInfo.style.opacity = "1";
    }, 50);
  }, 500);

}