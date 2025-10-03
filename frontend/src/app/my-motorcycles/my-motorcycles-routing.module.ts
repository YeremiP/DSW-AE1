import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMotorcyclesPage } from './my-motorcycles.page';

const routes: Routes = [
  {
    path: '',
    component: MyMotorcyclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMotorcyclesPageRoutingModule {}
