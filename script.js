$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>100){
            $('.navbar').addClass("sticky");
        }
         else{
            $('.navbar').removeClass("sticky");
            
        }
    })
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
    });

    



    // team effect
    $('.innerteam').owlCarousel({
       margin:20,
       loop:true,
       autoplayTimeOut:2000,
       autoplayHoverPause:true,
       responsive: {
           0:{
               items:1,
               nav:false
           },
           600:{
               items:2,
               nav:false
           },
           1000:{
               items:3,
               nav:false
           }
       }

    });

   $('#btnsubmit').click(function(){
       alert("thank you. I have received your request.");
   })
});

// typing

var typed=new Typed(".typing",{
    strings:["Designer","ios devloper","Freelancer","Development"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
});


var type=new Typed(".namejs",{
    strings:["Badri","Vishal","Pandey"],
    typeSpeed: 200,
    backSpeed: 60,
    loop:true
});