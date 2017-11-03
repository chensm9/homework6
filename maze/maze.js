function hasClass(element,csName){
  return element.className.match(RegExp('(\\s|^)'+csName+'(\\s|$)'));
 }　
 
function addClass(element,csName){
  if(!hasClass(element,csName))
    element.className+=' '+csName;
}

function Clear() {
  var obstacle = document.getElementsByClassName("obstacle");
  for(var i = 0; i < obstacle.length; i++) {
    obstacle[i].onmouseover = function(event) {
      //do nothing
    }
  }
}

window.onload = function () {
  var obstacle = document.getElementsByClassName("obstacle");
  var maze = document.getElementById("maze");
  var ifCheat = false;

  maze.onmouseleave = function(event) {
    ifCheat = true;
    for(var i = 0; i < obstacle.length; i++) {
      obstacle[i].className = "obstacle";
    }
  }

  var start = document.getElementById("start");
  var end = document.getElementById("end");

  start.onmouseover = function(event) {
    ifCheat = false;
    document.getElementById("tip").textContent = "";
    for(var i = 0; i < obstacle.length; i++) {
      obstacle[i].className = "obstacle";
      obstacle[i].onmouseover = function(event) {
        addClass(this, "red_obstacle");
        Clear();
        document.getElementById("tip").textContent = "You Lose!!";
      }
    }
  }

  end.onmouseover = function(event) {
    if(document.getElementById("tip").textContent == ""&&ifCheat) {
      Clear();
      document.getElementById("tip").textContent = 
        "Don't cheat, you should start from the 'S' and move to the inside the maze!";
    }
    else if(document.getElementById("tip").textContent == "") {
      Clear();
      document.getElementById("tip").textContent = "You Win!!";
    }
  }
}