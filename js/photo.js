var container = document.getElementById("container");
var piclist = document.getElementById("piclist");
var buttons = document.getElementById("buttons").getElementsByTagName("span");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var index = 1;
var animated = false;
var timer;

function change(distance) {
  var time = 500;
  var inteval = 10;
  var length = distance / (time/inteval);
  var newLeft = parseInt(piclist.style.left) + distance;
  
  animated = true;
  var animate = function () {
    if((length > 0 && parseInt(piclist.style.left) < newLeft) || (length < 0 && parseInt(piclist.style.left) > newLeft)) {
      piclist.style.left = parseInt(piclist.style.left) + length + "px";
      setTimeout(animate,inteval);
    } else {
      piclist.style.left = newLeft + "px";
      if(newLeft < -3000) {
        piclist.style.left = -600 + "px";
      }
      if(newLeft > -600) {
        piclist.style.left = -3000 + "px";
      }
      animated = false;
    }
  }
  animate();
}

function play() {
  timer = setInterval(function () {
    next.onclick();
  },3000);
}

function stop() {
  clearInterval(timer);
}

function showRadio() {
  for(var i in buttons) {
    if(buttons[i].className == "on") {
      buttons[i].className = "";
      break;
    }
  }
  buttons[index - 1].className = "on";
}

prev.onclick = function () {
  if(animated) {
    return;
  }
  if(index == 1) {
    index = 5;
  } else {
    index -= 1;
  }
  showRadio();
  change(600);
}

next.onclick = function () {
  if(animated) {
    return;
  }
  if(index == 5) {
    index = 1;
  } else {
    index += 1;
  }
  showRadio();
  change(-600);
}

for(var i in buttons) {
  buttons[i].onclick = function () {
    if(animated) {
      return;
    }
    if(this.className == "on") {
      return;
    }
    var myIndex = parseInt(this.getAttribute("index"));
    var distance = -600 * (myIndex - index);
    change(distance);
    index = myIndex;
    showRadio();
  }
}

container.onmouseover = stop;
container.onmouseout = play;

play();
