    
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Forms} from './models/forms.model';
import {environment} from '../environments/environment';

@Injectable()
export class FormsService {

  constructor(private http: HttpClient) {
  }

  list(){
      return this.http.get<Forms[]>(`${environment.serverUrl}/api/forms/`)
  }

  create(form){
    return this.http.post<Forms[]>(`${environment.serverUrl}/api/forms/`, form)
  }

  getFormById(formId){
    return this.http.get<Forms>(`${environment.serverUrl}/api/forms/${formId}`)
  }

  submitForm(formId,submissions){
    return this.http.post<any>(`${environment.serverUrl}/api/forms/${formId}`,{submissions:submissions});
  }
  
}