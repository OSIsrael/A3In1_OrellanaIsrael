import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ejercicio',
    loadChildren: () => import('./ejercicio/ejercicio.module').then( m => m.EjercicioPageModule)
  },
  {
    path: '',
    redirectTo: '/ejercicio',
    pathMatch: 'full'
    
  },
  {
    path: 'ejercicio',
    loadChildren: () => import('./ejercicio/ejercicio.module').then( m => m.EjercicioPageModule)
  },
  {
    path: 'ej2',
    loadChildren: () => import('./ej2/ej2.module').then( m => m.Ej2PageModule)
  },
  {
    path: 'ej3',
    loadChildren: () => import('./ej3/ej3.module').then( m => m.Ej3PageModule)
  },
  {
    path: 'ej4',
    loadChildren: () => import('./ej4/ej4.module').then( m => m.Ej4PageModule)
  },
  {
    path: 'ej5',
    loadChildren: () => import('./ej5/ej5.module').then( m => m.Ej5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
