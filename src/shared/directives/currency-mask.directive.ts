import { Directive, ElementRef } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
  selector: '[appCurrencyMask]'
})
export class CurrencyMaskDirective {
  inputMask = new Inputmask({alias: "currency"});
  constructor(private el: ElementRef) {
    this.inputMask.mask(el.nativeElement);
  }

}
