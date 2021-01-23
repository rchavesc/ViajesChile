$(document).ready(function(){

//Smooth Scroll
$('a').click(function(event){
    console.log(this,this.hash);
    if(this.hash !== ""){
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
        },800,function(){
          window.location.hash = hash
        })
      }
})

//Card Toggle
$('.card-title1').click(function(){
    $('.card-text1').toggle()
})

$('.card-title2').click(function(){
  $('.card-text2').toggle()
})

$('.card-title3').click(function(){
  $('.card-text3').toggle()
})

$('.card-title4').click(function(){
    $('.card-text4').toggle()
  })

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

})
