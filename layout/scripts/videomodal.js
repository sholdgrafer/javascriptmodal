// Get the modal
var vidmodal = document.getElementById('myVideoModal');

// Get the img that opens the modal
var vidstill = document.getElementById("videoModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("vidclose")[0];

// When the user clicks on the img, open the modal 
vidstill.onclick = function() {
	vidmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	vidmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == vidmodal) {
    	vidmodal.style.display = "none";
	}
}

