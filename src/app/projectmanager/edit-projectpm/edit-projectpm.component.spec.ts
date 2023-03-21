import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectpmComponent } from './edit-projectpm.component';

describe('EditProjectpmComponent', () => {
  let component: EditProjectpmComponent;
  let fixture: ComponentFixture<EditProjectpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
