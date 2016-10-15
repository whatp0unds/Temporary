var modal = document.getElementById("modal");
var pic = document.getElementById("pic").getElementsByTagName("img");
var modalImg = document.getElementById("modal-content");
var caption = document.getElementById("caption");
var close = document.getElementById("close");

for(var i in pic) {
  pic[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    caption.innerHTML = this.alt;
  }
}

close.onclick = function () {
  modal.style.display = "none";
}
