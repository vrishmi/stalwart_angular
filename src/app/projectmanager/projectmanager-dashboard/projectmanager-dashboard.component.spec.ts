import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectmanagerDashboardComponent } from './projectmanager-dashboard.component';

describe('ProjectmanagerDashboardComponent', () => {
  let component: ProjectmanagerDashboardComponent;
  let fixture: ComponentFixture<ProjectmanagerDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
