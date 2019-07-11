import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormListComponent} from './form-list/form-list.component';
import {SubmissionsListComponent} from './submissions-list/submissions-list.component';
import {CreateSubmissionsComponent} from './create-submissions/create-submissions.component';
import {CreateFormComponent} from './create-form/create-form.component';

const routes: Routes = [
  {
    path:'',
    component:FormListComponent
  },
  {
    path:'create-form',
    component:CreateFormComponent
  },
  {
    path:':id',
    component:SubmissionsListComponent,
    pathMatch: 'full',
  },
  {
    path:':id/submit',
    component:CreateSubmissionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
