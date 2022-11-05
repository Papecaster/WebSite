import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouteauComponent } from './couteau.component';

const routes: Routes = [
  { 
    path: "", component: CouteauComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouteauRoutingModule { }
