import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerLayoutComponent } from './projectmanager-layout.component';

describe('ProjectmanagerLayoutComponent', () => {
  let component: ProjectmanagerLayoutComponent;
  let fixture: ComponentFixture<ProjectmanagerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmanagerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
