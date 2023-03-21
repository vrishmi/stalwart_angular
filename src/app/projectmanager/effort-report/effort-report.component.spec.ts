import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortReportComponent } from './effort-report.component';

describe('EffortReportComponent', () => {
  let component: EffortReportComponent;
  let fixture: ComponentFixture<EffortReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffortReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffortReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
