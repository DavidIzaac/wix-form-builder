import { Component, Input , forwardRef, OnChanges} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {INPUT_TYPE} from '../../../constants';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor,OnChanges{

  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: boolean;
  @Input() isDropDown: boolean = false;
  @Input() errorMessage: string;
  
  text: string;
  inputType = INPUT_TYPE;

  propagateChange: (_: any) => { };

  ngOnChanges(){
    if(this.text && !(this.errorMessage == 'You need to add a least one field.')){
      this.errorMessage = null;
    }
  }


  propagateChangeToParent() {
    this.propagateChange(this.text);
  }

  // interface implementation//
  writeValue(obj: any): void {
    this.text = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

}
