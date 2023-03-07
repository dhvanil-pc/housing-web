import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule , HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-card/property-list/property-list.component';
import {enableProdMode} from '@angular/core';
import { HousingService } from './services/housing.service';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule


  ],

  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
