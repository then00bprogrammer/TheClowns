var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex>3){
  slideIndex=slideIndex%3;}
  if (slideIndex > x.length) {slideIndex = 1}
  else{x[slideIndex-1].style.display = "block";}
  setTimeout(carousel, 1800); // Change image every 2 seconds
}