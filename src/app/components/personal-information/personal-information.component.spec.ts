import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInformationComponent } from './personal-information.component';
import { CodeablePipeModule } from 'src/app/pipes/codeable.pipe';
import { TestUtil } from 'src/app/utils/test/test.util';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  let patient = TestUtil.getMockPatient();
  let de: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInformationComponent ],
      imports: [IonicModule.forRoot(), CodeablePipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    component.patient = patient;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ion-note with patient active status = true', () => {
    expect(de.query(By.css('ion-item:nth-child(1) > ion-note')).nativeElement.innerText).toBeTruthy(patient.active);
  });

  it('should have ion-note with patient birthdate = newDate()', () => {
    expect(de.query(By.css('ion-item:nth-child(2) > ion-note')).nativeElement.innerText).toEqual(patient.birthDate.toString());
  });

  it('should have ion-note with patient deceased time empty', () => {
    expect(de.query(By.css('ion-item:nth-child(3) > ion-note')).nativeElement.innerText).toBeFalsy()
  });

  it('should have ion-note with patient gender = female', () => {
    expect(de.query(By.css('ion-item:nth-child(4) > ion-note')).nativeElement.innerText).toEqual(patient.gender);
  });

  it('should have ion-note with patient marital status = textTest', () => {
    expect(de.query(By.css('ion-item:nth-child(5) > ion-note')).nativeElement.innerText).toEqual(patient.maritalStatus.text);
  });

  it('should have ion-note label with "textTest" and ion-note with "Fav"', () => {
    expect(de.query(By.css('ion-item-group > ion-item > ion-label')).nativeElement.innerText).toEqual(patient.communication[0].language.text);
    expect(de.query(By.css('ion-item-group > ion-item > ion-note')).nativeElement.innerText).toEqual(patient.communication[0].preferred ? 'Fav' : '');
  });

});
 