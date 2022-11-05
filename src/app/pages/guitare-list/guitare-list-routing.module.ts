import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitareListComponent } from './guitare-list.component';

const routes: Routes = [
  { 
    path: "", component: GuitareListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitareListRoutingModule { }
