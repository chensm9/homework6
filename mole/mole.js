
function gameStart(){
  document.getElementById("status").textContent = "Playing";
  var mole = document.getElementsByClassName("mole");
  for(var i = 0; i < mole.length; i++) {
    mole[i].onclick = function(){
      var score = parseInt(document.getElementById("score").textContent);
      if(this.style.borderColor == "blue") {
        this.style.borderColor = "gray";
        this.style.borderWidth = "1px";
        RandomButton();
        document.getElementById("score").textContent = score + 1;
      }
      else {
        document.getElementById("score").textContent = score - 1;
      }
    }
  }
  document.getElementById("score").textContent = 0;
  document.getElementById("time").textContent = 30;
  RandomButton();
}

function gameOver() {
  document.getElementById("status").textContent = "Game Over";
  var mole = document.getElementsByClassName("mole");
  for(var i = 0; i < mole.length; i++) {
    if(mole[i].style.borderColor == "blue") {
      mole[i].style.borderColor = "gray";
      mole[i].style.borderWidth = "1px";
    }
    mole[i].onclick = function(){
        //do nothing
    }
  }
  clearInterval(timeInterval);
  alert("Game Over\n"+"Your score is: "+ document.getElementById("score").textContent);
}

function RandomButton() {
  var num = Math.round(Math.random()*59);
  var mole = document.getElementsByClassName("mole");
  mole[num].style.borderColor = "blue";
  mole[num].style.borderWidth = "3px";
}

window.onload = function() {
  document.getElementById("switch").onclick = function() {
    if(document.getElementById("status").textContent == "Game Over") {
      gameStart();
      timeInterval = setInterval(function() {
        document.getElementById("time").textContent = 
          parseInt(document.getElementById("time").textContent) - 1;
      }, 1000);
      sumTime = setTimeout(gameOver, 31000);
    }
    else {
      gameOver();
      clearTimeout(sumTime);
      clearInterval(timeInterval);
    }
  }
}