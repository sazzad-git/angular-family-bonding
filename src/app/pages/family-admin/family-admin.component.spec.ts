import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyAdminComponent } from './family-admin.component';

describe('FamilyAdminComponent', () => {
  let component: FamilyAdminComponent;
  let fixture: ComponentFixture<FamilyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
