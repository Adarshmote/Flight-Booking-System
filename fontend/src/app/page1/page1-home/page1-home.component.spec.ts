import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1HomeComponent } from './page1-home.component';

describe('Page1HomeComponent', () => {
  let component: Page1HomeComponent;
  let fixture: ComponentFixture<Page1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
