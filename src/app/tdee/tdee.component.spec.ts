import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDEEComponent } from './tdee.component';

describe('TDEEComponent', () => {
  let component: TDEEComponent;
  let fixture: ComponentFixture<TDEEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDEEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
