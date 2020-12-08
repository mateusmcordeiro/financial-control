import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CurrencyMaskDirective } from 'src/shared/directives/currency-mask.directive';
import { SharedModule } from 'src/shared/shared.module';

import { TransactionCreatorComponent } from './transaction-creator.component';

describe('TransactionCreatorComponent', () => {
  let component: TransactionCreatorComponent;
  let fixture: ComponentFixture<TransactionCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCreatorComponent ],
      imports: [
        ReactiveFormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCreatorComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('currency directive should mask writing number on input to currency', () => {
    const input = fixture.debugElement.query(By.css('input[appCurrencyMask]')).nativeElement;
    input.value = '100';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('100.00');
  })


});
