import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProdutComponent } from './components/add-new-produt/add-new-produt.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProdDetalisComponent } from './components/prod-detalis/prod-detalis.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AboutComponent } from './new/about/about.component';
import { ContactComponent } from './new/contact/contact.component';
import { Home2Component } from './new/home2/home2.component';
import { LoginComponent } from './new/login/login.component';
import { ProductsComponent } from './new/products/products.component';
import { WrongPageComponent } from './new/wrong-page/wrong-page.component';


const routes: Routes = [
  {path:"",component:LayoutComponent,children:[
    {path: "", redirectTo: "Products", pathMatch: "full"},
    {path:"Home", component: Home2Component},
    {path:"About",component:AboutComponent},
    {path:"Contact",component:ContactComponent},
    {path:"Products",component:ProductsComponent},
    {path:"Register",component:UserRegisterComponent},
    {path:"Products/:prodId",component:ProdDetalisComponent},
    {path:"Product/Add",component:AddNewProdutComponent},
    {path:"Login",component:LoginComponent},
  ]},
 
    {path:"Logout",component:LoginComponent},
    {path:"**",component:WrongPageComponent},
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
