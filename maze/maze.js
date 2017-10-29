function Failed() {
  var obstacle = document.getElementsByClassName("obstacle");
  for(var i = 0; i < obstacle.length; i++) {
    obstacle[i].onmouseover = function(event) {
      //do nothing
    }
  }
  document.getElementById("tip").textContent = "You Lose!!";
}

window.onload = function () {
  var obstacle = document.getElementsByClassName("obstacle");
  var maze = document.getElementById("maze");
  var ifCheat = false;

  maze.onmouseleave = function(event) {
    ifCheat = true;
  }

  var start = document.getElementById("start");
  var end = document.getElementById("end");

  start.onmouseover = function(event) {
    ifCheat = false;
    document.getElementById("tip").textContent = "";
    for(var i = 0; i < obstacle.length; i++) {
      obstacle[i].style.backgroundColor = "#DDDDDD";
      obstacle[i].onmouseover = function(event) {
        this.style.backgroundColor = "red";
        Failed();
      }
    }
  }

  end.onmouseover = function(event) {
    if(document.getElementById("tip").textContent == ""&&ifCheat) {
      Failed();
      document.getElementById("tip").textContent = 
        "Don't cheat, you should start from the 'S' and move to the inside the maze!";
    }
    else if(document.getElementById("tip").textContent == "") {
      Failed();
      document.getElementById("tip").textContent = "You Win!!";
    }
  }
}