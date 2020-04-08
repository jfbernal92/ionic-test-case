import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientDetailsPage } from './patient-details.page';
import { PatientNamePipeModule } from '../pipes/patient-name.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PatientNamePipeModule,
    RouterModule.forChild([{ path: '', component: PatientDetailsPage }])
  ],
  declarations: [PatientDetailsPage]
})
export class PatientDetailsPageModule {}
