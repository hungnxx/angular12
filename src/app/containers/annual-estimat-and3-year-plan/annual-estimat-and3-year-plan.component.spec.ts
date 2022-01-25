import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualEstimatAnd3YearPlanComponent } from './annual-estimat-and3-year-plan.component';

describe('AnnualEstimatAnd3YearPlanComponent', () => {
  let component: AnnualEstimatAnd3YearPlanComponent;
  let fixture: ComponentFixture<AnnualEstimatAnd3YearPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualEstimatAnd3YearPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualEstimatAnd3YearPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
