import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReRegestrationComponent } from './re-regestration.component';

describe('ReRegestrationComponent', () => {
  let component: ReRegestrationComponent;
  let fixture: ComponentFixture<ReRegestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReRegestrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
