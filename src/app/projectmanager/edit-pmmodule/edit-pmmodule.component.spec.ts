import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPmmoduleComponent } from './edit-pmmodule.component';

describe('EditPmmoduleComponent', () => {
  let component: EditPmmoduleComponent;
  let fixture: ComponentFixture<EditPmmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPmmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPmmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
