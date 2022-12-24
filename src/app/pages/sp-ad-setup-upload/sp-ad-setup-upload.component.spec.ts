import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAdSetupUploadComponent } from './sp-ad-setup-upload.component';

describe('SpAdSetupUploadComponent', () => {
  let component: SpAdSetupUploadComponent;
  let fixture: ComponentFixture<SpAdSetupUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpAdSetupUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpAdSetupUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
