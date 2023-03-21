import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSidebarComponent } from './developer-sidebar.component';

describe('DeveloperSidebarComponent', () => {
  let component: DeveloperSidebarComponent;
  let fixture: ComponentFixture<DeveloperSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
