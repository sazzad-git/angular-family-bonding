import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceGeneralLayoutComponent } from './audience-general-layout.component';

describe('AudienceGeneralLayoutComponent', () => {
  let component: AudienceGeneralLayoutComponent;
  let fixture: ComponentFixture<AudienceGeneralLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceGeneralLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceGeneralLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
