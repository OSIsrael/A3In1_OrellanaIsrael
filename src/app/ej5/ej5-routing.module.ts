import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ej5Page } from './ej5.page';

const routes: Routes = [
  {
    path: '',
    component: Ej5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ej5PageRoutingModule {}
