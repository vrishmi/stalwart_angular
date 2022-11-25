import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeveloperDashboardComponent } from './developer-dashboard.component';

describe('DeveloperDashboardComponent', () => {
  let component: DeveloperDashboardComponent;
  let fixture: ComponentFixture<DeveloperDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
