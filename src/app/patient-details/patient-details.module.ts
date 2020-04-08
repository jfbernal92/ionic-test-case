import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientDetailsPage } from './patient-details.page';
import { PatientNamePipeModule } from '../pipes/patient-name.pipe';
import { AddressComponent } from '../components/address/address.component';
import { PersonalInformationComponent } from '../components/personal-information/personal-information.component';
import { PersonalContactInformationComponent } from '../components/personal-contact-information/personal-contact-information.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PatientNamePipeModule,
    RouterModule.forChild([{ path: '', component: PatientDetailsPage }])
  ],
  declarations: [
    PatientDetailsPage,
    AddressComponent,
    PersonalInformationComponent,
    PersonalContactInformationComponent
  ]
})
export class PatientDetailsPageModule {}
