function slideVienoiText() {
    document.getElementById("vivldvjlmjlj").innerHTML  = "En stock : 0";
}

$(document).ready(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() > 50){
//$(".presentation-1").css({"opacity" : "1"})
     $(".menu-today").css({"opacity:" : "1"})
} else {
//$(".presentation-1").css({"opacity" : "0"})
    $(".menu-today").css({"opacity:": "0"})
}
})
})



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function selectionitem1() {
    alert("Bonjour", "Bonjour");
}
