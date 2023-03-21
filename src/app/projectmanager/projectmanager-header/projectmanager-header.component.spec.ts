import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerHeaderComponent } from './projectmanager-header.component';

describe('ProjectmanagerHeaderComponent', () => {
  let component: ProjectmanagerHeaderComponent;
  let fixture: ComponentFixture<ProjectmanagerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmanagerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
