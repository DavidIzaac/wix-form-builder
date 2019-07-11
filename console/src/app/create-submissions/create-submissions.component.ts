import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import {Forms} from '../models/forms.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-submissions',
  templateUrl: './create-submissions.component.html',
  styleUrls: ['./create-submissions.component.scss']
})
export class CreateSubmissionsComponent implements OnInit {

  form: Forms;
  submissions: object = {};
  errorMessage: string;
  constructor(
    private formsService: FormsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formsService.getFormById(params['id'])
      .subscribe(form => {
        this.form = form;
      });
    });
  }

  submit() {
    if (Object.keys(this.submissions).length !== this.form.fields.length) {
      this.errorMessage = 'This field is mandatory.';
      return;
    }
    this.formsService.submitForm(this.form.id, this.submissions)
    .subscribe(result => {
      this.router.navigate(['/', this.form.id]);
    });
  }

}
