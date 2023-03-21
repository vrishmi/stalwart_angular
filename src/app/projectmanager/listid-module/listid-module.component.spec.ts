import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidModuleComponent } from './listid-module.component';

describe('ListidModuleComponent', () => {
  let component: ListidModuleComponent;
  let fixture: ComponentFixture<ListidModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
