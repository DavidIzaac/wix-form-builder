import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import {Forms} from '../models/forms.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  constructor(private formService:FormsService) { }
  readonly tablePageSize = 15;
  forms:Forms[];
  resultCount: number = 0;

  ngOnInit() {
    this.formService.list()
    .subscribe(forms => {
      this.forms = forms;
      console.log(forms)
    })
  }

}
