import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListComponent } from './form-list/form-list.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { CreateSubmissionsComponent } from './create-submissions/create-submissions.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { DataTableModule, DropdownModule, SharedModule as PrimeSharedModule } from 'primeng/primeng';
import {FormsService} from './forms.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    SubmissionsListComponent,
    CreateSubmissionsComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeSharedModule,
    DataTableModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
