import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service/categoryService';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  imagePreview: any;
  form: FormGroup;
  categories = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService

  ) {
    this.getCategories();

   }

  ngOnInit() {
    this.form = new FormGroup({
      name_uz: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      name_ru: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      description_uz: new FormControl(null, { validators: [Validators.required] }),
      description_ru: new FormControl(null, { validators: [Validators.required] }),

      image: new FormControl(null, { validators: [Validators.required] }),

      category_id: new FormControl(null, { validators: [Validators.required] }),
      quantity: new FormControl(null, { validators: [Validators.required] }),
      brand: new FormControl(null, { validators: [Validators.required] }),
      model: new FormControl(null, { validators: [Validators.required] }),
      configuration: new FormControl(null, { validators: [Validators.required] }),
      price: new FormControl(null, { validators: [Validators.required] }),
      sale: new FormControl(null, { validators: [Validators.required] })
    });

  }


  onSave() {
      this.productService.post(
        this.form.value.name_uz,
        this.form.value.name_ru,
        this.form.value.description_uz,
        this.form.value.description_ru,
        this.form.value.image,
        this.form.value.category_id,
        this.form.value.quantity,
        this.form.value.brand,
        this.form.value.model,
        this.form.value.configuration,
        this.form.value.price,
        this.form.value.sale
      )
      .subscribe( res => {
        console.log(res.json());
      });
  }

  getCategories() {
    this.categoryService.getAll().subscribe( res => {
      this.categories = res.json();
    });
  }


  onInputChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;                   // rasm tanlanganda ko'rsatish
    };
    reader.readAsDataURL(file);
  }






}
