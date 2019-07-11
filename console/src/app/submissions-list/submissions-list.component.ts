import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import { ActivatedRoute } from '@angular/router';
import {Forms} from '../models/forms.model';

@Component({
  selector: 'app-submissions-list',
  templateUrl: './submissions-list.component.html',
  styleUrls: ['./submissions-list.component.scss']
})
export class SubmissionsListComponent implements OnInit {

  constructor(
    private formService: FormsService,
    private route: ActivatedRoute,
    ) { }
  resultCount: number = 0;
  form: Forms;
  submissions = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formService.getFormById(params['id'])
      .subscribe(form => {
        this.form = form;
      });
    });
  }

}
