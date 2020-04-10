import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientDetailsPage } from './patient-details.page';
import { PatientNamePipeModule } from '../../pipes/patient-name.pipe';
import { AddressComponent } from '../../components/address/address.component';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';
import { PersonalContactInformationComponent } from '../../components/personal-contact-information/personal-contact-information.component';
import { ContactPartyInformationComponent } from '../../components/contact-party-information/contact-party-information.component';
import { MedicationRequestComponent } from '../../components/medication-request/medication-request.component';
import { CodeablePipeModule } from '../../pipes/codeable.pipe';
import { ReferencePipeModule } from '../../pipes/reference.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PatientNamePipeModule,
    CodeablePipeModule,
    ReferencePipeModule,
    RouterModule.forChild([{ path: '', component: PatientDetailsPage }])
  ],
  declarations: [
    PatientDetailsPage,
    AddressComponent,
    PersonalInformationComponent,
    PersonalContactInformationComponent,
    ContactPartyInformationComponent,
    MedicationRequestComponent
  ]
})
export class PatientDetailsPageModule {}
