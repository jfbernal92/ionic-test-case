import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'patient-list',
    loadChildren: () =>
      import('./pages/patient-list/patient-list.module').then(m => m.PatientListPageModule)

  },
  {
    path: 'patient/:id',
    loadChildren: () =>
      import('./pages/patient-details/patient-details.module').then(m => m.PatientDetailsPageModule)
  },
  { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
