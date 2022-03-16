import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Reactive1Component } from './reactive1/reactive1.component';
import { Templetedriven1Component } from './templetedriven1/templetedriven1.component';
import { Passwordmatch1Component } from './passwordmatch1/passwordmatch1.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutcustomerComponent } from './aboutcustomer/aboutcustomer.component';
import { NodataComponent } from './nodata/nodata.component';
import { Child1Component } from './child1/child1.component';
import { ParentComponent } from './parent/parent.component';
import { BindingComponent } from './binding/binding.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Reactive1Component,
    Templetedriven1Component,
    Passwordmatch1Component,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    AboutcompanyComponent,
    AboutcustomerComponent,
    NodataComponent,
    Child1Component,
    ParentComponent,
    BindingComponent,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
