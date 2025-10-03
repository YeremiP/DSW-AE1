import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-motorcycles',
    pathMatch: 'full'
  },
  {
    path: 'my-motorcycles',
    loadChildren: () => import('./my-motorcycles/my-motorcycles.module').then( m => m.MyMotorcyclesPageModule)
  },
  {
    path: 'add-motorcycle',
    loadChildren: () => import('./add-motorcycle/add-motorcycle.module').then( m => m.AddMotorcyclePageModule)
  },
  {
    path: 'add-motorcycle/:id',
    loadChildren: () => import('./add-motorcycle/add-motorcycle.module').then(m => m.AddMotorcyclePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
