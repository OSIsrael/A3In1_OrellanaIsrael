import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej5PageRoutingModule } from './ej5-routing.module';

import { Ej5Page } from './ej5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej5PageRoutingModule
  ],
  declarations: [Ej5Page]
})
export class Ej5PageModule {}
