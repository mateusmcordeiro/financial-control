import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';


export interface CurrencyMaskConfig {
  active: boolean
} 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {

  @Input()
  disabled: boolean = false;
  @Input()
  label: string = '';
  @Input()
  placeholder: string = '';
  @Input()
  type: 'text' | 'email' | 'password' = 'text';

  @Input()
  currency: CurrencyMaskConfig = {
    active: false
  };

  @Output() 
  oninput = new EventEmitter();

  private _value = '';

  constructor(
    @Self() 
    @Optional()
    private ngControl: NgControl
    ) { 
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
    }

  ngOnInit(): void {
  }

  get value(): any {
    return this._value;
  }

  inputChanged(e:any) {
    this.oninput.emit(e.target.value);
    this.onChange(e.target.value);
  }

  private onChange(e: any) {};

  private onTouched() {}

  writeValue(value: any): void {
    this._value = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }



}
