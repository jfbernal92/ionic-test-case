import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicationRequestComponent } from './medication-request.component';
import { ReferencePipeModule } from 'src/app/pipes/reference.pipe';
import { CodeablePipeModule } from 'src/app/pipes/codeable.pipe';

describe('MedicationRequestComponent', () => {
  let component: MedicationRequestComponent;
  let fixture: ComponentFixture<MedicationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationRequestComponent ],
      imports: [IonicModule.forRoot(), ReferencePipeModule, CodeablePipeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
