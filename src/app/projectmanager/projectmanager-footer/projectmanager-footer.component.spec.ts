import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerFooterComponent } from './projectmanager-footer.component';

describe('ProjectmanagerFooterComponent', () => {
  let component: ProjectmanagerFooterComponent;
  let fixture: ComponentFixture<ProjectmanagerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmanagerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
