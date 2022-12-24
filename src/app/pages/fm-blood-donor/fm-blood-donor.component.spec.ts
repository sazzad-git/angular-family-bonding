import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmBloodDonorComponent } from './fm-blood-donor.component';

describe('FmBloodDonorComponent', () => {
  let component: FmBloodDonorComponent;
  let fixture: ComponentFixture<FmBloodDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmBloodDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmBloodDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
