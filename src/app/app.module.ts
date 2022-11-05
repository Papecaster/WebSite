import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GuitareComponent } from './pages/guitare/guitare.component';
import { GuitareListComponent } from './pages/guitare-list/guitare-list.component';
import { LinksComponent } from './pages/links/links.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { CouteauComponent } from './pages/couteau/couteau.component';
import { CouteauListComponent } from './pages/couteau-list/couteau-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuitareComponent,
    GuitareListComponent,
    LinksComponent,
    ContactComponent,
    ConditionsComponent,
    CouteauComponent,
    CouteauListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
