
/* $(document).ready(function(){
$("h1").css("color", "blue");
});

$(document).eady(function(){
    $("button").css("color", "green");
})   */


$("h1").addClass("big-title margin-50");


/*$("h1").text("Bye");
$("button").html("<em>Hey</em>");
console.log($("img").attr("src"));

$("a").attr("herf","https://www.google.com");

$("h1").click(function(){
   $("h1").css("color", "purple");
}); */

/*for(var i = 0; i< 5;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
     document.querySelector("h1").style.color = "purple";
    });
}*/

/*$("button").click(function(){
    $("h1").css("color", "pink");
});

$("input").keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
});*/

$("button").on("click", function(){
   // $("h1").hide();
   //$("h1").toggle();
   //$("h1").fadeOut();
   //$("h1").fadeToggle();
   //$("h1").slideToggle();
//   $("h1").animate({opacity:0.5})
//$("h1").animate({margin: "20%"});
 $("h1").slideUp().slideDown().animate({opacity : 0.5});
 

});