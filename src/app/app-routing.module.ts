import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutcustomerComponent } from './aboutcustomer/aboutcustomer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BindingComponent } from './binding/binding.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NodataComponent } from './nodata/nodata.component';
import { ParentComponent } from './parent/parent.component';
import { Passwordmatch1Component } from './passwordmatch1/passwordmatch1.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { Templetedriven1Component } from './templetedriven1/templetedriven1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { 
    path: 'about',
    component: AboutusComponent,
    children: [
      { path: 'organization', component: AboutcompanyComponent },
      { path: 'customer', component: AboutcustomerComponent },
    ]
  },
  { path: 'templetedriven', component: Templetedriven1Component },
  { path: 'reactive', component: Reactive1Component },
  { path: 'paswordmatch', component: Passwordmatch1Component },
  { path: 'contact/:id', component: ContactusComponent },
  { 
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ]
  },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: 'binding', component: BindingComponent },
  { path: '**', component: NodataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
