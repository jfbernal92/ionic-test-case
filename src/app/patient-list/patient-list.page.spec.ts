import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, IonInfiniteScroll } from '@ionic/angular';

import { PatientListPage } from './patient-list.page';
import { PatientNamePipeModule, PatientNamePipe } from '../pipes/patient-name.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestUtil } from '../utils/test/test.util';
import { Patient } from '../models/patient.model';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('PatientListPage', () => {
  let component: PatientListPage;
  let fixture: ComponentFixture<PatientListPage>;
  let de: DebugElement;
  let mockApiService: { getPatients: jasmine.Spy, getPage: jasmine.Spy };

  const patient = TestUtil.getMockPatient();
  const apiResponse = TestUtil.getMockApiResponse<Patient>(patient);

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getPatients', 'getPage']);
    mockApiService.getPatients.and.returnValue(of(apiResponse));
    mockApiService.getPage.and.returnValue(of(apiResponse));

    TestBed.configureTestingModule({
      declarations: [PatientListPage],
      imports: [
        IonicModule.forRoot(),
        PatientNamePipeModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{ provide: ApiService, useValue: mockApiService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientListPage);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 1 patient', () => {
    expect(de.queryAll(By.css('ion-content > ion-item')).length).toEqual(apiResponse.entry.length);
  })

  it('should display patient name', () => {
    const patientNamePipe = new PatientNamePipe();
    expect(de.query(By.css('ion-content > ion-item')).nativeElement.innerText).toEqual(patientNamePipe.transform(patient.name));
  })

  it('should navigate to patient details on click', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    const link: HTMLElement = de.query(By.css('ion-content > ion-item')).nativeElement;
    link.click();
    fixture.detectChanges();

    expect(router.navigateByUrl).toHaveBeenCalledWith(router.createUrlTree([`patient/${patient.id}`]), { skipLocationChange: false, replaceUrl: false });
  });

});
