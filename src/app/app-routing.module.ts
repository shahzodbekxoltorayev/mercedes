import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './website/navbar/navbar.component';
import { HomeComponent } from './website/home/home.component';
import { CatalogComponent } from './website/catalog/catalog.component';
import { AboutComponent } from './website/about/about.component';
import { AllCatalogComponent } from './website/all-catalog/all-catalog.component';
import { AboutWeComponent } from './website/about-we/about-we.component';
import { AllNewsComponent } from './website/all-news/all-news.component';
import { ContactComponent } from './website/contact/contact.component';
import { AboutProductComponent } from './website/about-product/about-product.component';
import { ProductsComponent } from './website/products/products.component';
import { SortProductsComponent } from './website/sort-products/sort-products.component';
import { BasketComponent } from './website/basket/basket.component';
import { MotorsComponent } from './website/motors/motors.component';
import { ChassisComponent } from './website/chassis/chassis.component';
import { AccessoryComponent } from './website/accessory/accessory.component';
import { EngineOilComponent } from './website/engine-oil/engine-oil.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminSignComponent } from './admin/admin-sign/admin-sign.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminAddCategoryComponent } from './admin/admin-add-category/admin-add-category.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminSubCategoryComponent } from './admin/admin-sub-category/admin-sub-category.component';
import { AdminAddSubCategoryComponent } from './admin/admin-add-sub-category/admin-add-sub-category.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { AdminAddNewsComponent } from './admin/admin-add-news/admin-add-news.component';
import { NewAboutComponent } from './website/new-about/new-about.component';
import { PeymentDeleveryComponent } from './website/peyment-delevery/peyment-delevery.component';
import { ConvenientPaymentComponent } from './website/convenient-payment/convenient-payment.component';
import { HelpComponent } from './website/help/help.component';

const routes: Routes = [

    {
      path : '', component : NavbarComponent, children: [
        { path: '', component: HomeComponent},
         {path: 'catalog', component: AllCatalogComponent} ,
         {path: 'about', component: AboutWeComponent},
         {path: 'news', component: AllNewsComponent},
         {path: 'contact', component: ContactComponent},
         {path: 'about-product', component: AboutProductComponent},
         {path: 'products', component: ProductsComponent},
         {path: 'sort-products', component: SortProductsComponent},
         {path: 'shopping-card', component: BasketComponent},
         {path: 'motor', component: MotorsComponent },
         { path: 'chassis', component: ChassisComponent},
         { path: 'accessuary', component: AccessoryComponent},
         { path: 'engine_oil', component: EngineOilComponent},
         {path: 'new-about' , component: NewAboutComponent },
         {path: 'payment-delivery', component: PeymentDeleveryComponent },
         { path: 'convenient-payment' , component: ConvenientPaymentComponent },
         { path: 'help' , component: HelpComponent },
         { path: 'select/:id1/:id2' , component: AllCatalogComponent },
        ]
    },

    { path: 'login', component: AdminSignComponent },
    {
      path: 'admin', component: AdminNavbarComponent, children : [
        { path: '', component: AdminHomeComponent },
        { path: 'products', component: AdminProductsComponent },
        { path: 'addProduct', component: AdminAddProductComponent },
        { path: 'updateProduct/:id', component: AdminAddProductComponent },
        { path: 'categories', component: AdminCategoriesComponent },
        { path: 'addCategory', component: AdminAddCategoryComponent },
        { path: 'updateCategory/:id', component: AdminAddCategoryComponent },
        { path: 'subCategory', component: AdminSubCategoryComponent },
        { path: 'addSubCategory', component: AdminAddSubCategoryComponent },
        { path: 'updateSubCategory/:id', component: AdminAddSubCategoryComponent },
        { path: 'users', component: AdminUsersComponent },
        { path: 'contacts', component: AdminContactsComponent },
        { path: 'news', component: AdminNewsComponent },
        { path: 'addNews', component: AdminAddNewsComponent },
        { path: 'updateNews/:id', component: AdminAddNewsComponent }
      ]
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
