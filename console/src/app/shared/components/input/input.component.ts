import { Component, Input , forwardRef, OnInit} from '@angular/core';
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
export class InputComponent implements ControlValueAccessor, OnInit{

  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: boolean;
  @Input() isDropDown: boolean = false;
  text: string;
  inputType = INPUT_TYPE;

  propagateChange: (_: any) => { };

  ngOnInit(){
    console.log(this.inputType)

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
