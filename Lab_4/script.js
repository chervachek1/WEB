document.getElementById("button_1").addEventListener('click', function() {
  this.classList.toggle("active");
});

document.querySelector("#button_2").addEventListener('click', function() {
  this.classList.toggle("active");
});


function addimage() { 
  var img = document.createElement("img");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kamienica_Kestner%C3%B3w_w_Warszawie_05.JPG/1920px-Kamienica_Kestner%C3%B3w_w_Warszawie_05.JPG"; 
  img.style.height = 50 + "%"; 
  img.style.width = 50 + "%";
  document.body.appendChild(img);
}

function del()
 {
  var images = document.getElementsByTagName('img')
  images[images.length - 1].remove();
}

function zoomin() {
  var myImg = document.getElementsByTagName("img");
  var arrayLength = myImg.length;
  for (var i = 0; i < arrayLength; i++) {
    var currWidth = myImg[i].clientWidth;
    myImg[i].style.width = (currWidth + 5) + "px";
  }
}

function zoomout() {
  var myImg = document.getElementsByTagName("img");
  var arrayLength = myImg.length;
  for (var i = 0; i < arrayLength; i++) {
    var currWidth = myImg[i].clientWidth;
    myImg[i].style.width = (currWidth - 5) + "px";
  }
}