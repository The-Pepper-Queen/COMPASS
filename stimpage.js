

//this displays the image in the modal
function displaygif(idname) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  var placeholder = document.getElementById(idname);
  modalImg.src = placeholder.src;
}

// When the user clicks on <span> (x), close the modal
 function change() {
   var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function differentimg(imageid, mouse) {
  document.getElementById(imageid).src = mouse;
}
