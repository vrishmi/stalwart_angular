import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerSidebarComponent } from './projectmanager-sidebar.component';

describe('ProjectmanagerSidebarComponent', () => {
  let component: ProjectmanagerSidebarComponent;
  let fixture: ComponentFixture<ProjectmanagerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmanagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
