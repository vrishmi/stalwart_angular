import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpmTasksComponent } from './editpm-tasks.component';

describe('EditpmTasksComponent', () => {
  let component: EditpmTasksComponent;
  let fixture: ComponentFixture<EditpmTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpmTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpmTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
