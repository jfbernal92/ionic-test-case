import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicationRequestComponent } from './medication-request.component';
import { ReferencePipeModule, ReferencePipe } from 'src/app/pipes/reference.pipe';
import { CodeablePipeModule } from 'src/app/pipes/codeable.pipe';
import { DebugElement } from '@angular/core';
import { TestUtil } from 'src/app/utils/test/test.util';
import { By } from '@angular/platform-browser';

describe('MedicationRequestComponent', () => {
  let component: MedicationRequestComponent;
  let fixture: ComponentFixture<MedicationRequestComponent>;
  let medicationRequest = TestUtil.getMockMedication();
  let de: DebugElement;
  const referencePipe = new ReferencePipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationRequestComponent ],
      imports: [IonicModule.forRoot(), ReferencePipeModule, CodeablePipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicationRequestComponent);
    component = fixture.componentInstance;
    component.medicationRequest = medicationRequest;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ion-note with medication Name = textTest', () => {
    expect(de.query(By.css('ion-item:nth-child(1) > ion-note')).nativeElement.innerText).toEqual(medicationRequest.medicationCodeableConcept.text);
  });

  it('should have ion-note with medication Status = statusTest', () => {
    expect(de.query(By.css('ion-item:nth-child(2) > ion-note')).nativeElement.innerText).toEqual(medicationRequest.status);
  });

  it('should have ion-note with medication Intent = intentTest', () => {
    expect(de.query(By.css('ion-item:nth-child(3) > ion-note')).nativeElement.innerText).toEqual(medicationRequest.intent);
  });

  it('should have ion-note with medication Priority = priorityTest', () => {
    expect(de.query(By.css('ion-item:nth-child(4) > ion-note')).nativeElement.innerText).toEqual(medicationRequest.priority);
  });

  it('should have ion-note with medication Subject = referenceTest', () => {
    expect(de.query(By.css('ion-item:nth-child(5) > ion-note')).nativeElement.innerText).toEqual(referencePipe.transform(medicationRequest.subject));
  });

  it('should have ion-note with medication Ecounter = referenceTest', () => {
    expect(de.query(By.css('ion-item:nth-child(6) > ion-note')).nativeElement.innerText).toEqual(referencePipe.transform(medicationRequest.encounter));
  });

  it('should have ion-note with medication Requester = referenceTest', () => {
    expect(de.query(By.css('ion-item:nth-child(7) > ion-note')).nativeElement.innerText).toEqual(referencePipe.transform(medicationRequest.requester));
  });

  it('should have ion-note with medication Authored On = new Date()', () => {
    expect(de.query(By.css('ion-item:nth-child(8) > ion-note')).nativeElement.innerText).toEqual(medicationRequest.authoredOn.toString());
  });

  it('should have ion-group with medication Supporting Information', () => {
    expect(de.query(By.css('ion-item-group > ion-item-divider > ion-label')).nativeElement.innerText).toEqual('Supporting Information');
    expect(de.query(By.css('ion-item-group > ion-item-divider + ion-item > ion-note')).nativeElement.innerText).toEqual(referencePipe.transform(medicationRequest.supportingInformation[0]));
  });
});

