import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCreativeSampleComponent } from './ads-creative-sample.component';

describe('AdsCreativeSampleComponent', () => {
  let component: AdsCreativeSampleComponent;
  let fixture: ComponentFixture<AdsCreativeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCreativeSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsCreativeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
