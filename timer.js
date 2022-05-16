// Set the date we're counting up from (or counting down to)
//var countDownDate = new Date("Jun 15, 2021 10:00:00").getTime();
var countDownDate = new Date("Jun 10, 2022 14:50:59").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count date
  //var distance =  now - countDownDate;
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="timer"
  /*document.getElementById("timer01").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";*/
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  
  // If the count down is over, write some text 
  /*if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }*/
}, 1000);
