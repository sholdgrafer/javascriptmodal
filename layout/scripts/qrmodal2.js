// Get the modal
var qrmodal = document.getElementById('qrModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('qrImg2');
var modalImg = document.getElementById("imgqr2");
var captionText = document.getElementById("qrcaption2");
img1.onclick = function(){
	qrmodal.style.display = "block";
	modalImg.src = "images/demo/gallery/lightboximages/amazon_qrguide_full.png";
	captionText.innerHTML = "Quick Reference Guide";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("qrclose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  qrmodal.style.display = "none";
}
