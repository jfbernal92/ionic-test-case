import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientDetailsPage } from './patient-details.page';
import { PatientNamePipeModule } from '../pipes/patient-name.pipe';
import { CodeablePipeModule } from '../pipes/codeable.pipe';
import { ReferencePipeModule } from '../pipes/reference.pipe';
import { AddressComponent } from '../components/address/address.component';
import { PersonalInformationComponent } from '../components/personal-information/personal-information.component';
import { PersonalContactInformationComponent } from '../components/personal-contact-information/personal-contact-information.component';
import { ContactPartyInformationComponent } from '../components/contact-party-information/contact-party-information.component';
import { MedicationRequestComponent } from '../components/medication-request/medication-request.component';
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PatientDetailsPage', () => {
  let component: PatientDetailsPage;
  let fixture: ComponentFixture<PatientDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PatientDetailsPage,
        AddressComponent,
        PersonalInformationComponent,
        PersonalContactInformationComponent,
        ContactPartyInformationComponent,
        MedicationRequestComponent
      ],
      imports: [
        IonicModule.forRoot(),
        PatientNamePipeModule,
        CodeablePipeModule,
        ReferencePipeModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
