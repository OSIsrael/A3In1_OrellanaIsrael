import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ej3PageRoutingModule } from './ej3-routing.module';

import { Ej3Page } from './ej3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ej3PageRoutingModule
  ],
  declarations: [Ej3Page]
})
export class Ej3PageModule {}
