import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitsComponent } from './sits.component';

describe('SitsComponent', () => {
  let component: SitsComponent;
  let fixture: ComponentFixture<SitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
