import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpmTasksComponent } from './listpm-tasks.component';

describe('ListpmTasksComponent', () => {
  let component: ListpmTasksComponent;
  let fixture: ComponentFixture<ListpmTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpmTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpmTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
