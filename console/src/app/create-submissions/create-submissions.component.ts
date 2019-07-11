import { Component, OnInit } from '@angular/core';
import {FormsService} from '../forms.service';
import {Forms} from '../models/forms.model';
import { Fields } from '../models/fields.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-submissions',
  templateUrl: './create-submissions.component.html',
  styleUrls: ['./create-submissions.component.scss']
})
export class CreateSubmissionsComponent implements OnInit {

  form:Forms;
  submissions:object = {};
  constructor(
    private formsService: FormsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formsService.getFormById(params['id'])
      .subscribe(form => {
        console.log(form);
        
        this.form = form;
      })
    })
  }

  submit(){
    this.formsService.submitForm(this.form.id,this.submissions)
    .subscribe(result => {
      this.router.navigate(['/']);
    })
  }

}
