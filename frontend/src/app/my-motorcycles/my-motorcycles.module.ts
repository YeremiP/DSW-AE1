import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMotorcyclesPageRoutingModule } from './my-motorcycles-routing.module';

import { MyMotorcyclesPage } from './my-motorcycles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMotorcyclesPageRoutingModule
  ],
  declarations: [MyMotorcyclesPage]
})
export class MyMotorcyclesPageModule {}
