import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej4Page } from './ej4.page';

const routes: Routes = [
  {
    path: '',
    component: Ej4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej4PageRoutingModule {}
