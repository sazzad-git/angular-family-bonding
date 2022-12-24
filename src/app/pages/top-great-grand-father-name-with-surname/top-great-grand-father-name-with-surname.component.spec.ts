import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGreatGrandFatherNameWithSurnameComponent } from './top-great-grand-father-name-with-surname.component';

describe('TopGreatGrandFatherNameWithSurnameComponent', () => {
  let component: TopGreatGrandFatherNameWithSurnameComponent;
  let fixture: ComponentFixture<TopGreatGrandFatherNameWithSurnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGreatGrandFatherNameWithSurnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGreatGrandFatherNameWithSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
