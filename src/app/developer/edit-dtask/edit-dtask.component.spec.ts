import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDtaskComponent } from './edit-dtask.component';

describe('EditDtaskComponent', () => {
  let component: EditDtaskComponent;
  let fixture: ComponentFixture<EditDtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDtaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
