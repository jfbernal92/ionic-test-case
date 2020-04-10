import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressComponent } from './address.component';
import { TestUtil } from 'src/app/utils/test/test.util';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let address = TestUtil.getMockAddress();
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = [address];
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ion-label with the label "Address -index-" of every address information', () => {
    expect(de.query(By.css('ion-item-group > ion-item-divider > ion-label')).nativeElement.innerText).toBe('Address 1');
  });

  it('should have ion-note with address use = useTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(3) > ion-note')).nativeElement.innerText).toBe(address.use);
  });

  it('should have ion-note with address type = typeTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(4) > ion-note')).nativeElement.innerText).toBe(address.type);
  });

  it('should have ion-note with address city = citiTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(5) > ion-note')).nativeElement.innerText).toBe(address.city);
  });

  it('should have ion-note with address district = districtTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(6) > ion-note')).nativeElement.innerText).toBe(address.district);
  });

  it('should have ion-note with address state = stateTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(7) > ion-note')).nativeElement.innerText).toBe(address.state);
  });

  it('should have ion-note with address postal code = postalCodeTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(8) > ion-note')).nativeElement.innerText).toBe(address.postalCode);
  });

  it('should have ion-note with address country = countryTest', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(9) > ion-note')).nativeElement.innerText).toBe(address.country);
  });

  it('should have n lines for every line in the address', () => {
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(10) > ion-label')).nativeElement.innerText).toBe('Line 1');
    expect(de.query(By.css('ion-item-group > ion-item:nth-child(10) > ion-note')).nativeElement.innerText).toBe(address.line[0]);
  });

});

