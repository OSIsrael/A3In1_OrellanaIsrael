import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej4PageRoutingModule } from './ej4-routing.module';

import { Ej4Page } from './ej4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej4PageRoutingModule
  ],
  declarations: [Ej4Page]
})
export class Ej4PageModule {}
