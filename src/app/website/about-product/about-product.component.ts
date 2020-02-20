import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    $(document).ready(function(){
      $('#owl-1 .owl-carousel').owlCarousel(
      {
        responsive:{
          0:{
            items:1
          }, 
          450:{
            items:2
          },
          700:{
            items:3
          },
          868:{
            items:3
          } ,       
          992:{
            items:5
          }
        },
        margin: 5,
        loop: true,
        stagePadding:10,
        nav: true,
    // navText: ['Back','Next'],
    navText: ['',''],
    // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
    dots: false,
    dotsEach: true,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  }
  );
    });


    function init() {
      document.getElementById("clickMe1").addEventListener("click", function() {
        document.getElementById("bikini-display1").style.display = "block";
        document.getElementById("bikini-display3").style.display = "none";
        document.getElementById("bikini-display4").style.display = "none";
        document.getElementById("bikini-display2").style.display = "none";
      });
    
      document.getElementById("clickMe2").addEventListener("click", function() {
        document.getElementById("bikini-display2").style.display ="block";
        document.getElementById("bikini-display1").style.display ="none";
        document.getElementById("bikini-display3").style.display ="none";
        document.getElementById("bikini-display4").style.display ="none";
      
      });
    
      document.getElementById("clickMe3").addEventListener("click", function() {
        document.getElementById("bikini-display3").style.display ="block";
        document.getElementById("bikini-display1").style.display ="none";
        document.getElementById("bikini-display4").style.display ="none";
        document.getElementById("bikini-display2").style.display ="none";
      });
    
      document.getElementById("clickMe4").addEventListener("click", function() {
        document.getElementById("bikini-display4").style.display ="block";
        document.getElementById("bikini-display1").style.display ="none";
        document.getElementById("bikini-display3").style.display ="none";
        document.getElementById("bikini-display2").style.display ="none";
      });
    }
    init();
    
    $(".bikini-thumbnail img").click(function() {
      //Remove the my-list--selected class from any elements that already have it
      $('.thumbnail-clicked').removeClass('thumbnail-clicked');
      //Add the .border-bottom class back to any element that is missing it
      $('.thumbnail-clicked').addClass('bikini-thumbnails');
      //Add the my-list--selected class to the clicked element
      $(this).addClass('thumbnail-clicked');
      //Remove the border-bottom class from the clicked element
      $(this).find('.bikini-thumbnails').removeClass('bikini-thumbnails');
      });


      

  }

}
