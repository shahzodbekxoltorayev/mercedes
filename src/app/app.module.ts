import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatSliderModule ,
  MatInputModule,
  MatButtonModule ,
  MatIconModule,
  MatSelectModule
}  from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { FooterComponent } from './website/footer/footer.component';
import { CatalogComponent } from './website/catalog/catalog.component';
import { AboutComponent } from './website/about/about.component'; 
import { MagazinComponent} from './website/magazin/magazin.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { NewsComponent } from './website/news/news.component';
import { CallBackComponent } from './website/call-back/call-back.component';
import { AboutWeComponent } from './website/about-we/about-we.component';
import { AllNewsComponent } from './website/all-news/all-news.component';
import { AllCatalogComponent } from './website/all-catalog/all-catalog.component';
import { ContactComponent } from './website/contact/contact.component';
import { AboutProductComponent } from './website/about-product/about-product.component';
import { ProductsComponent } from './website/products/products.component';
import { SortProductsComponent } from './website/sort-products/sort-products.component';
import { BasketComponent } from './website/basket/basket.component';
import { MotorsComponent } from './website/motors/motors.component';
import { ChassisComponent } from './website/chassis/chassis.component';
import { AccessoryComponent } from './website/accessory/accessory.component';
import { EngineOilComponent } from './website/engine-oil/engine-oil.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogComponent,
    AboutComponent ,
    MagazinComponent,
    GalleryComponent,
    NewsComponent,
    CallBackComponent,
    AboutWeComponent,
    AllNewsComponent,
    AllCatalogComponent,
    ContactComponent,
    AboutProductComponent,
    ProductsComponent,
    SortProductsComponent,
    BasketComponent,
    MotorsComponent,
    ChassisComponent,
    AccessoryComponent,
    EngineOilComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
