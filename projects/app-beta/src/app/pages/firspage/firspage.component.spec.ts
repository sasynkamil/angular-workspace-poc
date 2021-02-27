import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirspageComponent } from './firspage.component';

describe('FirspageComponent', () => {
  let component: FirspageComponent;
  let fixture: ComponentFixture<FirspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
