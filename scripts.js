$(document).ready(function({
   // alert ("jQuery");
    $("box button").click(function (){
    $(this).next().toggleClass ("visible");
});
})