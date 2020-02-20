import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/categoryService';
import { SubCategoryService } from 'src/app/shared/service/sub_categoryService';
import { LanguageService } from 'src/app/shared/service/languageService';
import { ProductService } from 'src/app/shared/service/productsService';
declare const $: any;
@Component({
  selector: 'app-all-catalog',
  templateUrl: './all-catalog.component.html',
  styleUrls: ['./all-catalog.component.css']
})
export class AllCatalogComponent implements OnInit {

  categories = [];
  category = [];
  subCategories = [];
  language = true ;
  select = false;
  products = [];
  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private languageService: LanguageService,
    private productService: ProductService
  ) {
    this.getCategories();
   }

   getCategories() {
      this.categoryService.getAll().subscribe( res => {
        this.categories = res.json();
      });
   }

   selectCat(id) {
    this.subCategoryService.getSelected(id).subscribe( res => {
      this.subCategories = res.json();
    });
  }

  // tslint:disable-next-line: variable-name
  sort(cat_id, subcat_id) {
    this.productService.getSelected(cat_id, subcat_id).subscribe( res => {
        this.products = res.json();
        this.select = true;
    });
  }

  ngOnInit() {
    if (localStorage.getItem('lang') === 'ru') {
      this.language = false;
    }

    // tslint:disable-next-line: only-arrow-functions
    $(document).ready( function() {
      $('#owl-1 .owl-carousel').owlCarousel(
      {
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
          },
          700: {
            items: 3
          },
          868: {
            items: 3
          } ,
          992: {
            items: 5
          }
        },
        margin: 5,
        loop: true,
        stagePadding: 10,
        nav: true,
    // navText: ['Back','Next'],
    navText: ['', ''],
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

}
