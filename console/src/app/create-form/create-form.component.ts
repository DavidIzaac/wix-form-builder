import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import {Forms} from '../models/forms.model';
import {Fields} from '../models/fields.model';
import { Router } from '@angular/router';
import {INPUT_TYPE} from '../constants';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor(private formsService:FormsService,private router: Router) { }

  form:Forms = new Forms();
  field: Fields = new Fields();
  errorMessage:string = '';
  formNameError:string = '';
  inputType = INPUT_TYPE;
  
  ngOnInit() {
    
  }

  addField(){
    
    if(!this.field.fieldLabel || !this.field.inputName || !this.field.inputType){
      this.errorMessage = 'This field is mandatory.';
      return;
    }
    let field = Object.assign({},this.field);
    this.form.fields.push(field);
    this.field = new Fields();
  }

  deleteField(index){
    this.form.fields.splice(index,1);
  }

  createForm(){
    if(!this.form.name){
      this.formNameError = 'You need to enter a name.'
      return;
    }
    
    if(!this.form.fields.length){
      this.formNameError = 'You need to add a least one field.'
      return;
    }
    this.formsService.create(this.form)
    .subscribe((form) => {
      this.router.navigate(['/'])
    })
  }

}
