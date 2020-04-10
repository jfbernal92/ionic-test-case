import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactPartyInformationComponent } from './contact-party-information.component';
import { PatientNamePipeModule, PatientNamePipe } from 'src/app/pipes/patient-name.pipe';
import { CodeablePipeModule, CodeablePipe } from 'src/app/pipes/codeable.pipe';
import { AddressComponent } from '../address/address.component';
import { PersonalContactInformationComponent } from '../personal-contact-information/personal-contact-information.component';
import { TestUtil } from 'src/app/utils/test/test.util';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactPartyInformationComponent', () => {
  let component: ContactPartyInformationComponent;
  let fixture: ComponentFixture<ContactPartyInformationComponent>;
  let contact = TestUtil.getMockContact();
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPartyInformationComponent, AddressComponent, PersonalContactInformationComponent ],
      imports: [IonicModule.forRoot(), PatientNamePipeModule, CodeablePipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPartyInformationComponent);
    component = fixture.componentInstance;
    component.contact = [contact];
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have n ion-label with the label "Contact -index-" of every contact party information', () => {
    expect(de.query(By.css('ion-item-group > ion-item-divider > ion-label')).nativeElement.innerText).toBe('Contact 1');
  });

  it('should have ion-note with the label Name = textTest', () => {
    const namePipe = new PatientNamePipe();
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(2) > ion-note')).nativeElement.innerText).toBe(namePipe.transform(contact.name));
  });

  it('should have a list of relationships with the contact', () => {
    expect(de.query(By.css('ion-item-group > ion-item-group > ion-item > ion-label')).nativeElement.innerText).toBe('Relationship 1');
  });

  it('should have ion-note with the label Gender = female', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(4) > ion-note')).nativeElement.innerText).toBe(contact.gender);
  });

  it('should have an app-address component', () => {
    expect(de.query(By.css('ion-item-group > app-address'))).toBeDefined();
  });

  it('should have an app-personal-contact-information component', () => {
    expect(de.query(By.css('ion-item-group > app-personal-contact-information'))).toBeDefined();
  });

  
 
});


