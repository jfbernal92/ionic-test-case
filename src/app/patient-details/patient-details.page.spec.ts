import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PatientDetailsPage } from './patient-details.page';

describe('PatientDetailsPage', () => {
  let component: PatientDetailsPage;
  let fixture: ComponentFixture<PatientDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
