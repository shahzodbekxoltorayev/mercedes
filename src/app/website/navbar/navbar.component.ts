import { Component, OnInit } from '@angular/core';
declare var $: any;
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  selected = 'option1';

  constructor() { }
  

  ngOnInit() {
 
    $(document).ready(function() {
      // $('.collapse').click(function() {
      // 	$('header ul').slideToggle('600');
      // 	$('header').toggleClass('bg');
    
      // });
          $(document).scroll(function(event) {
            var scroll=$(this).scrollTop();
            if($(this).scrollTop()>170){
              $('.header-bottom').addClass('fixed');
            }
            else{
              $('.header-bottom').removeClass('fixed');
            }
          });


          $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
         });  
    });



 
    
  }

}
