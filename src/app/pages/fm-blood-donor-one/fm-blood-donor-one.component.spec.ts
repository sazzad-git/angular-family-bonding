import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmBloodDonorOneComponent } from './fm-blood-donor-one.component';

describe('FmBloodDonorOneComponent', () => {
  let component: FmBloodDonorOneComponent;
  let fixture: ComponentFixture<FmBloodDonorOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmBloodDonorOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmBloodDonorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
