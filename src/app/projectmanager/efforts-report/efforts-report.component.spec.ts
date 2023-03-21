import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortsReportComponent } from './efforts-report.component';

describe('EffortsReportComponent', () => {
  let component: EffortsReportComponent;
  let fixture: ComponentFixture<EffortsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffortsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffortsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
