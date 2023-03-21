import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModulepmComponent } from './list-modulepm.component';

describe('ListModulepmComponent', () => {
  let component: ListModulepmComponent;
  let fixture: ComponentFixture<ListModulepmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListModulepmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModulepmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
