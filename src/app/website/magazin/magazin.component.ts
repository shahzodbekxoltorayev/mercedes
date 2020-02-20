import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

declare var $: any;
@Component({
  selector: 'app-magazin',
  templateUrl: './magazin.component.html',
  styleUrls: ['./magazin.component.css']
})
export class MagazinComponent implements OnInit {

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

  }


  add(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }




}
