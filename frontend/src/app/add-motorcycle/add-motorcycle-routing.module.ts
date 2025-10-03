import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMotorcyclePage } from './add-motorcycle.page';

const routes: Routes = [
  {
    path: '',
    component: AddMotorcyclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMotorcyclePageRoutingModule {}
