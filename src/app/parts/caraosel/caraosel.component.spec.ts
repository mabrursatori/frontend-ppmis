import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraoselComponent } from './caraosel.component';

describe('CaraoselComponent', () => {
  let component: CaraoselComponent;
  let fixture: ComponentFixture<CaraoselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaraoselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraoselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
