import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/categoryService';
import { SubCategoryService } from 'src/app/shared/service/sub_categoryService';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  selected = 'option1';
  categories = [];
  subcategories = [];

  constructor(
    private categoryService: CategoryService,
    private subcategoryService: SubCategoryService
  ) {
    this.getCategory();
    this.subgetCategory();
  }

  getCategory() {
    this.categoryService.getAll().subscribe( res => {
      this.categories = res.json();
    });
  }
  subgetCategory() {
    this.subcategoryService.getAll().subscribe( res => {
      this.subcategories = res.json();
    });
  }

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
            $('.reg-form').animate({height: "toggle", opacity: "toggle"} );
         });
    });





  }

}
