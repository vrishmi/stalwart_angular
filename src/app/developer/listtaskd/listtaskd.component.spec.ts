import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtaskdComponent } from './listtaskd.component';

describe('ListtaskdComponent', () => {
  let component: ListtaskdComponent;
  let fixture: ComponentFixture<ListtaskdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtaskdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtaskdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
