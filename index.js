function hideTerminal() {
  placeDiv(300, 100, "myterminaldiv");
  var x = document.getElementById("myterminaldiv");
  x.style.display = "none";
}

function showTerminal() {
  placeDiv(300, 100, "myterminaldiv");
  var x = document.getElementById("myterminaldiv");
  x.style.display = "block";
}

function hideAbout() {
  placeDiv(300, 100, "myaboutdiv");
  var x = document.getElementById("myaboutdiv");
  x.style.display = "none";
}

function showAbout() {
  placeDiv(300, 100, "myaboutdiv");
  var x = document.getElementById("myaboutdiv");
  x.style.display = "block";
}

function hideGallery() {
  placeDiv(200, 50, "mygallerydiv");
  var x = document.getElementById("mygallerydiv");
  x.style.display = "none";
}

function showGallery() {
  placeDiv(200, 50, "mygallerydiv");
  var x = document.getElementById("mygallerydiv");
  x.style.display = "block";
}

function hideThoughts() {
  placeDiv(300, 100, "mythoughtsdiv");
  var x = document.getElementById("mythoughtsdiv");
  x.style.display = "none";
}

function showThoughts() {
  placeDiv(300, 100, "mythoughtsdiv");
  var x = document.getElementById("mythoughtsdiv");
  x.style.display = "block";
}

function hideDirectory() {
  placeDiv(300, 100, "mydirectorydiv");
  var x = document.getElementById("mydirectorydiv");
  x.style.display = "none";
}

function showDirectory() {
  placeDiv(300, 100, "mydirectorydiv");
  var x = document.getElementById("mydirectorydiv");
  x.style.display = "block";
}

function hideDesktop() {
  placeDiv(300, 100, "mydesktopdiv");
  var x = document.getElementById("mydesktopdiv");
  x.style.display = "none";
}

function showDesktop() {
  placeDiv(300, 100, "mydesktopdiv");
  var x = document.getElementById("mydesktopdiv");
  x.style.display = "block";
}

function hideMovies() {
  placeDiv(350, 130, "moviesdiv");
  var x = document.getElementById("moviesdiv");
  x.style.display = "none";
}

function showMovies() {
  placeDiv(350, 130, "moviesdiv");
  var x = document.getElementById("moviesdiv");
  x.style.display = "block";
}

function toggleTerminal() {
  placeDiv(300, 100, "myterminaldiv");
  var x = document.getElementById("myterminaldiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function placeDiv(x_pos, y_pos, elementID) {
  var d = document.getElementById(elementID);
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}

function randombg(){
    var random= Math.floor(Math.random() * 73) + 0;
    var bigSize = ["url('background-images/image7.png')",
                   "url('background-images/image8.png')",
                   "url('background-images/image9.png')",
                   "url('background-images/image10.png')",
                   "url('background-images/image11.png')",
                   "url('background-images/image12.png')",
                   "url('background-images/image13.png')",
                   "url('background-images/image14.png')",
                   "url('background-images/image15.png')",
                   "url('background-images/image16.png')",
                   "url('background-images/image17.png')",
                   "url('background-images/image18.png')",
                   "url('background-images/image19.png')",
                   "url('background-images/image20.png')",
                   "url('background-images/image21.png')",
                   "url('background-images/image22.png')",
                   "url('background-images/image23.png')",
                   "url('background-images/image24.png')",
                   "url('background-images/image25.png')",
                   "url('background-images/image26.png')",
                   "url('background-images/image27.png')",
                   "url('background-images/image28.png')",
                   "url('background-images/image29.png')",
                   "url('background-images/image30.png')",
                   "url('background-images/image31.png')",
                   "url('background-images/image32.png')",
                   "url('background-images/image33.png')",
                   "url('background-images/image34.png')",
                   "url('background-images/image35.png')",
                   "url('background-images/image36.png')",
                   "url('background-images/image37.png')",
                   "url('background-images/image38.png')",
                   "url('background-images/image39.png')",
                   "url('background-images/image40.png')",
                   "url('background-images/image41.png')",
                   "url('background-images/image42.png')",
                   "url('background-images/image43.png')",
                   "url('background-images/image44.png')",
                   "url('background-images/image45.png')",
                   "url('background-images/image46.png')",
                   "url('background-images/image47.png')",
                   "url('background-images/image48.png')",
                   "url('background-images/image49.png')",
                   "url('background-images/image50.png')",
                   "url('background-images/image51.png')",
                   "url('background-images/image52.png')",
                   "url('background-images/image53.png')",
                   "url('background-images/image54.png')",
                   "url('background-images/image55.png')",
                   "url('background-images/image56.png')",
                   "url('background-images/image57.png')",
                   "url('background-images/image58.png')",
                   "url('background-images/image59.png')",
                   "url('background-images/image60.png')",
                   "url('background-images/image61.png')",
                   "url('background-images/image62.png')",
                   "url('background-images/image63.png')",
                   "url('background-images/image64.png')",
                   "url('background-images/image65.png')",
                   "url('background-images/image66.png')",
                   "url('background-images/image67.png')",
                   "url('background-images/image68.png')",
                   "url('background-images/image69.png')",
                   "url('background-images/image70.png')",
                   "url('background-images/image71.png')",
                   "url('background-images/image72.png')",
                   "url('background-images/image73.png')",
                   "url('background-images/image74.png')",
                   "url('background-images/image75.png')",
                   "url('background-images/image76.png')",
                   "url('background-images/image77.png')",
                   "url('background-images/image78.png')",
                   "url('background-images/image79.png')",
                   "url('background-images/image80.png')",
                   "url('background-images/image81.png')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }