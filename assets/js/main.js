$(document).ready(function(){
    $(".controller i").click(function(){
        $('.controller').toggleClass("active");
        $(".menu").toggleClass("active");
    });
    $("#experience").html(new Date().getFullYear() - 2020);
});