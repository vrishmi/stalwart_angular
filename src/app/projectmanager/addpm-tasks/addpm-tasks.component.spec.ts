import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpmTasksComponent } from './addpm-tasks.component';

describe('AddpmTasksComponent', () => {
  let component: AddpmTasksComponent;
  let fixture: ComponentFixture<AddpmTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpmTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpmTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
