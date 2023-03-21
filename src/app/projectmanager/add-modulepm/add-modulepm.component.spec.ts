import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModulepmComponent } from './add-modulepm.component';

describe('AddModulepmComponent', () => {
  let component: AddModulepmComponent;
  let fixture: ComponentFixture<AddModulepmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModulepmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModulepmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
