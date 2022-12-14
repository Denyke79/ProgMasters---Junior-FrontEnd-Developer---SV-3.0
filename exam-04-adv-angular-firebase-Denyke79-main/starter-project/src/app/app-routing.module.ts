import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponentComponent } from './components/customer-form-component/customer-form-component.component';
import { CustomerListComponentComponent } from './components/customer-list-component/customer-list-component.component';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer-form', component: CustomerFormComponentComponent },
  { path: 'customer-list', component: CustomerListComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
