function hasClass(element,csName){
  return element.className.match(RegExp('(\\s|^)'+csName+'(\\s|$)'));
}　
 
function addClass(element,csName){
  if(!hasClass(element,csName))
    element.className += ' '+csName;
}

function gameStart(){
  document.getElementById("status").textContent = "Playing";
  var mole = document.getElementsByClassName("mole");
  for(var i = 0; i < mole.length; i++) {
    mole[i].onclick = function(){
      var score = parseInt(document.getElementById("score").textContent);
      if(hasClass(this, "blue_mole")) {
        this.className = "mole";
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
    if(hasClass(mole[i], "blue_mole")) {
      mole[i].className = "mole";
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
  addClass(mole[num], "blue_mole");
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