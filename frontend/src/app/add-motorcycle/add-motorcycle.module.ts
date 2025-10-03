import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMotorcyclePageRoutingModule } from './add-motorcycle-routing.module';

import { AddMotorcyclePage } from './add-motorcycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMotorcyclePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddMotorcyclePage]
})
export class AddMotorcyclePageModule {}
