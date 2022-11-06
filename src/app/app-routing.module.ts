import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'conditions',
    loadChildren: () => import('./pages/conditions/conditions.module').then( m => m.ConditionsModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./pages/links/links.module').then( m => m.LinksModule)
  },
  {
    path: 'guitares',
    loadChildren: () => import('./pages/guitare-list/guitare-list.module').then( m => m.GuitareListModule)
  },
  {
    path: 'guitare',
    loadChildren: () => import('./pages/guitare/guitare.module').then( m => m.GuitareModule)
  },
  {
    path: 'couteaux',
    loadChildren: () => import('./pages/couteau-list/couteau-list.module').then( m => m.CouteauListModule)
  },
  {
    path: 'couteau',
    loadChildren: () => import('./pages/couteau/couteau.module').then( m => m.CouteauModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "**", redirectTo: "home"},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
