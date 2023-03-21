import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperFooterComponent } from './developer-footer.component';

describe('DeveloperFooterComponent', () => {
  let component: DeveloperFooterComponent;
  let fixture: ComponentFixture<DeveloperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
