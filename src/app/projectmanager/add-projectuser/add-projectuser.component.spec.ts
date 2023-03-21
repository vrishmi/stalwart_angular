import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectuserComponent } from './add-projectuser.component';

describe('AddProjectuserComponent', () => {
  let component: AddProjectuserComponent;
  let fixture: ComponentFixture<AddProjectuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
