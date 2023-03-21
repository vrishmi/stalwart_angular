import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectuserComponent } from './list-projectuser.component';

describe('ListProjectuserComponent', () => {
  let component: ListProjectuserComponent;
  let fixture: ComponentFixture<ListProjectuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProjectuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
