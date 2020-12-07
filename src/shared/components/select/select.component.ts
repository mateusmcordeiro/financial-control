import { Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

export interface SelectOptionModel {
  value: any;
  text: string;
  disabled: boolean;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements ControlValueAccessor  {

  @Input()
  options: Array<SelectOptionModel> = [
    {
      value: '',
      text: 'Selecione',
      disabled: false
    }
  ];
  @Output() 
  onchange = new EventEmitter();

  @Input()
  set id(value: string) {
    this._id = value;
  }

  get id() {
    return `${this._id}-select`;
  }

  private _id = '';
  
  isFocused = false;
  _label = 'Selecione'
  _value: any;

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


  changeFocus(isFocus: boolean) {
    this.isFocused = isFocus;
  }

  get value(): any {
    return this._value;
  }

  selectChanged(event: any) {
    this.onChange(event.target.value);
    this.onchange.emit(event.target.value);
    this.changeFocus(false);
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
