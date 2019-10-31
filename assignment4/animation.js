let animWorking = true;
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");
let circle7 = document.getElementById("circle7");

function performAnimation(id) {

  if(id=="stop"){
    animWorking = false;
  }
  if (animWorking) {
    animWorking = false;
    console.log(id);

    switch (id) {

      //for 
      case "circle1":
      //setInterval(circleAnimate(circle2), 0);
      circleAnimate(circle2);
        //break;
      case "circle2":
      //setInterval(circleAnimate(circle3), 0);
      circleAnimate(circle3);
        //break;
      case "circle3":
      //setInterval(circleAnimate(circle4),0);
      circleAnimate(circle4);
        //break;
      case "circle4":
      //setInterval(circleAnimate(circle5), 0);
      circleAnimate(circle5);
        //break;
      case "circle5":
      //setInterval(circleAnimate(circle6), 0);
      circleAnimate(circle6);
        //break;
      case "circle6":
      //setInterval(circleAnimate(circle7), 0);
      circleAnimate(circle7);
        //break;
      case "circle7":
      //setInterval(circleAnimate(circle1), 0);
      circleAnimate(circle1);
      
        //circleAnimate(circle1);
        //animWorking=true;
        break;
      case "stop":
        animWorking=false;
    }
  }
}
var delay=0;

function circleAnimate(id) {
  return new Promise(function (res, rej) {
    id.className = "circleAnimate";
    id.style.animationDelay = delay+"s";
    delay+=5;

    
  }).then(function (res, rej) {

    id.className = "circle";
  });
}