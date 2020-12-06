import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

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
  @HostBinding('attr.id')
  externalId = '';

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
    this._ID = value;
    this.externalId = '';
  }

  get id() {
    return this._ID;
  }

  private _ID = '';
  
  isFocused = false;
  _label = 'Selecione'
  _value: any;

  constructor() { }

  ngOnInit(): void {
  }


  changeFocus(isFocus: boolean) {
    this.isFocused = isFocus;
  }

  onSelect(data: SelectOptionModel){
    this._label = data.text
    this._value = data.value
    this.onChange(this.value)
    this.onchange.emit(this._value)
  }

  get value(): any {
    return this._value;
  }

  onChange(value: any) {
    this._value = value;
  };

  onTouched() { 

  }

  writeValue(value: any): void {
    this._value = value
    this.onChange(this._value)
  }
  
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  

}
