var elem; 
$('img').on('click', function(){
    elem = $(this).attr('src')
    console.log(elem)
    modal.style.display = 'block';
    modalImg.src = elem; 
    captionText.innerHTML = this.alt;
//How to write pic name when modal shows
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



