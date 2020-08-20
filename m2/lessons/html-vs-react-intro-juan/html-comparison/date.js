
function tick(){
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}

setInterval(tick, 1000)
