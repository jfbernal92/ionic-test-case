import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'ionic-test-case',
    component: TabsPage,
    children: [
      {
        path: 'patient-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../patient-list/patient-list.module').then(m => m.PatientListPageModule)
          }
        ]
      },
      {
        path: 'patient/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../patient-details/patient-details.module').then(m => m.PatientDetailsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/ionic-test-case/patient-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ionic-test-case/patient-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
