import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalContactInformationComponent } from './personal-contact-information.component';
import { TestUtil } from 'src/app/utils/test/test.util';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PersonalContactInformationComponent', () => {
  let component: PersonalContactInformationComponent;
  let fixture: ComponentFixture<PersonalContactInformationComponent>;
  let contactPoint = TestUtil.getMockContactPoint();
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalContactInformationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalContactInformationComponent);
    component = fixture.componentInstance;
    component.telecom = [contactPoint];
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have ion-label with the label "Conctact -index-" of every contact information', () => {
    expect(de.query(By.css('ion-item-group:nth-child(1) > ion-item-divider > ion-label')).nativeElement.innerText).toBeTruthy('Contact 1');
  });

  it('should have ion-note with contact value = valueTest', () => {
    expect(de.query(By.css('ion-item-group:nth-child(1) > ion-item:nth-child(2) > ion-note')).nativeElement.innerText).toEqual(contactPoint.value);
  });

  it('should have ion-note with contact use = useTest', () => {
    expect(de.query(By.css('ion-item-group:nth-child(1) > ion-item:nth-child(3) > ion-note')).nativeElement.innerText).toEqual(contactPoint.use);
  });
 
  it('should have ion-note with contact preference = 0', () => {
    expect(de.query(By.css('ion-item-group:nth-child(1) > ion-item:nth-child(4) > ion-note')).nativeElement.innerText).toEqual(contactPoint.rank.toString())
  });
  
  it('should have ion-note with contact system = systemTest', () => {
    expect(de.query(By.css('ion-item-group:nth-child(1) > ion-item:nth-child(5) > ion-note')).nativeElement.innerText).toEqual(contactPoint.system);
  });

});
