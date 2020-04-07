import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientListPage } from './patient-list.page';
import { PatientNamePipe } from '../pipes/patient-name.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PatientListPage }])
  ],
  declarations: [PatientListPage, PatientNamePipe]
})
export class PatientListPageModule {}
