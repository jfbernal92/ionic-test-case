import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactPartyInformationComponent } from './contact-party-information.component';
import { PatientNamePipeModule } from 'src/app/pipes/patient-name.pipe';
import { CodeablePipeModule } from 'src/app/pipes/codeable.pipe';
import { AddressComponent } from '../address/address.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { PersonalContactInformationComponent } from '../personal-contact-information/personal-contact-information.component';

describe('ContactPartyInformationComponent', () => {
  let component: ContactPartyInformationComponent;
  let fixture: ComponentFixture<ContactPartyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPartyInformationComponent, AddressComponent, PersonalContactInformationComponent ],
      imports: [IonicModule.forRoot(), PatientNamePipeModule, CodeablePipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPartyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
