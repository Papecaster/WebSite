import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitareComponent } from './guitare.component';

const routes: Routes = [
  { 
    path: "", component: GuitareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitareRoutingModule { }
