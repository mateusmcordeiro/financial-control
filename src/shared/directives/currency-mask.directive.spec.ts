import { Input } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { InputComponent } from '../components/input/input.component';
import { CurrencyMaskDirective } from './currency-mask.directive';

describe('CurrencyMaskDirective', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
        CurrencyMaskDirective
      ]
    })
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.currency = {
      active: true
    };
  })

  it('should create an component', () => {
    expect(component).toBeDefined();
  });


});
