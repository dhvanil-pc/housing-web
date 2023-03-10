import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule , HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-card/property-list/property-list.component';
import {enableProdMode} from '@angular/core';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
enableProdMode();
const appRoute : Routes = [
  {path:"", component:PropertyListComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent},
  {path:"**", component:PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent ,
      AddPropertyComponent,
      PropertyDetailComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)

  ],

  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
