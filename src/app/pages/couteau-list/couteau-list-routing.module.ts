import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouteauListComponent } from './couteau-list.component';

const routes: Routes = [
  { 
    path: "", component: CouteauListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouteauListRoutingModule { }
