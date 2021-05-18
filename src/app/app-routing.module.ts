import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FakeColorComponent } from './fake-color/fake-color.component';
import { FakeEmployeeComponent } from './fake-employee/fake-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',      component:HomeComponent},
  {path:'register',  component:RegisterComponent},
  {path:'login',     component:LoginComponent},
  {path:'contactus', component:ContactusComponent},
  /*{path:'test', component:TestComponent},
  {path:'fakecolor', component:FakeColorComponent},
  {path:'fakeemployee', component:FakeEmployeeComponent},*/
  {path:'users', component:UsersComponent},
  {path:'users/:id', component:UserdetailsComponent},
  {path:'products',  component:ProductsComponent, children:[
    {path:'mobiles',     component:MobilesComponent},
    {path:'bikes',       component:BikesComponent},
    {path:'televisions', component:TelevisionsComponent},
    {path:'',          redirectTo:'/products/mobiles', pathMatch:'full'}
  ]},
  {path:'',          redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
