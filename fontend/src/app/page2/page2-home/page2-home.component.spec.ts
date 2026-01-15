import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2HomeComponent } from './page2-home.component';

describe('Page2HomeComponent', () => {
  let component: Page2HomeComponent;
  let fixture: ComponentFixture<Page2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
