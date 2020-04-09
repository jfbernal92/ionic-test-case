import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientListPage } from './patient-list.page';
import { PatientNamePipeModule } from '../pipes/patient-name.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientListPage', () => {
  let component: PatientListPage;
  let fixture: ComponentFixture<PatientListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientListPage],
      imports: [
        IonicModule.forRoot(),
        PatientNamePipeModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
