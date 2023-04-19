import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevprofileComponent } from './devprofile.component';

describe('DevprofileComponent', () => {
  let component: DevprofileComponent;
  let fixture: ComponentFixture<DevprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
