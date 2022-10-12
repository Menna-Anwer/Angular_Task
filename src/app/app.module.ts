import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightborderDirective } from './Directive/lightborder.directive';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { TotalPriceComponent } from './components/total-price/total-price.component';
import { PriceComponent } from './components/price/price.component';
import { Home2Component } from './new/home2/home2.component';
import { AboutComponent } from './new/about/about.component';
import { ContactComponent } from './new/contact/contact.component';
import { ProductsComponent } from './new/products/products.component';
import { WrongPageComponent } from './new/wrong-page/wrong-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProdDetalisComponent } from './components/prod-detalis/prod-detalis.component';
import { LoginComponent } from './new/login/login.component';
import { AddNewProdutComponent } from './components/add-new-produt/add-new-produt.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LightborderDirective,
    CatListComponent,
    TotalPriceComponent,
    PriceComponent,
    Home2Component,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    WrongPageComponent,
    LayoutComponent,
    ProdDetalisComponent,
    LoginComponent,
    AddNewProdutComponent,
    UserRegisterComponent 
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
