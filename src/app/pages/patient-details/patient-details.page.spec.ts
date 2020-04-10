import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientDetailsPage, ID_PARAM } from './patient-details.page';
import { PatientNamePipeModule } from '../../pipes/patient-name.pipe';
import { CodeablePipeModule } from '../../pipes/codeable.pipe';
import { ReferencePipeModule } from '../../pipes/reference.pipe';
import { AddressComponent } from '../../components/address/address.component';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';
import { PersonalContactInformationComponent } from '../../components/personal-contact-information/personal-contact-information.component';
import { ContactPartyInformationComponent } from '../../components/contact-party-information/contact-party-information.component';
import { MedicationRequestComponent } from '../../components/medication-request/medication-request.component';
import { ApiService } from '../../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestUtil } from '../../utils/test/test.util';
import { MedicationRequest } from '../../models/medication-request.model';
import { of } from 'rxjs';
import { ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { by } from 'protractor';

describe('PatientDetailsPage', () => {
  let component: PatientDetailsPage;
  let fixture: ComponentFixture<PatientDetailsPage>;
  let de: DebugElement;

  const patient = TestUtil.getMockPatient();
  const medication = TestUtil.getMockMedication();
  const apiResponse = TestUtil.getMockApiResponse<MedicationRequest>(medication);

  let mockApiService: { getPatient: jasmine.Spy, getMedications: jasmine.Spy };
  let map: ParamMap = convertToParamMap({ [ID_PARAM]: patient.id });

  beforeEach(async(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getPatient', 'getMedications']);
    mockApiService.getPatient.and.returnValue(of(patient));
    mockApiService.getMedications.and.returnValue(of(apiResponse));
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
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: ActivatedRoute, useValue: { paramMap: of(map) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDetailsPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the patient details components', () => {
    expect(de.query(By.css('app-personal-information'))).toBeTruthy();
    expect(de.query(By.css('app-address'))).toBeTruthy();
    expect(de.query(By.css('app-personal-contact-information'))).toBeTruthy();
    expect(de.query(By.css('app-contact-party-information'))).toBeTruthy();
    expect(de.query(By.css('app-medication-request'))).toBeTruthy();
  });
});

describe('PatientDetailsPage when data has not been loaded', () => {
  
  let component: PatientDetailsPage;
  let fixture: ComponentFixture<PatientDetailsPage>;
  let de: DebugElement;
  let mockApiService: { getPatient: jasmine.Spy, getMedications: jasmine.Spy };
  
  beforeEach(async(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getPatient', 'getMedications']);
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
      providers: [
        { provide: ApiService, useValue: mockApiService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDetailsPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }))

  it('should show Loading patient details... in a ion-title tag', () => {
    expect(de.query(By.css('ion-title')).nativeElement.innerText).toBe('Loading patient details...');
  })

});