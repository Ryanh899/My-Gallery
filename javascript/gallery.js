var elem; 
$('img').on('click', function(){
    elem = $(this).attr('src')
    if ($(this).attr('id') !== "portrait-image") {
    modal.style.display = 'block';
    modalImg.src = elem; 
    captionText.innerHTML = this.alt;
    } else {
    longModal.style.display = 'block';
    longModalImg.src = elem; 
    captionText.innerHTML = this.alt;
    }
//How to write pic name when modal shows
})

// Get the modal
var modal = document.getElementById("myModal");
var longModal = document.getElementById("myModal-long")
var longModalImg = document.getElementById('img02')
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var longImg = $('#portrait-image')
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close-long")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
span2.onclick = function () {
    longModal.style.display = "none"
}




