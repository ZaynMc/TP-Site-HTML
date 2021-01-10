function slideVienoiText() {
    document.getElementById("vivldvjlmjlj").innerHTML  = "En stock : 0";
}

$(document).ready(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() > 200){
$(".presentation-1").css({"opacity" : "1"})
}
else {
$(".presentation-1").css({"opacity" : "0"})
}
if($(this).scrollTop() > 1200){
$(".presentation-1").css({"opacity" : "0"})
$(".presentation-2").css({"opacity" : "1"})
} else {
$(".presentation-2").css({"opacity" : "0"})
}

})
})