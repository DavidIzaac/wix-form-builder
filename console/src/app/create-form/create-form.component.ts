import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import {Forms} from '../models/forms.model';
import {Fields} from '../models/fields.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor(private formsService:FormsService,private router: Router) { }

  form:Forms = new Forms();
  field: Fields = new Fields();

  ngOnInit() {

  }

  addField(){
    let field = Object.assign({},this.field);
    this.form.fields.push(field)
  }

  createForm(){
    this.formsService.create(this.form)
    .subscribe((form) => {
      this.router.navigate(['/'])
    })
  }

}
