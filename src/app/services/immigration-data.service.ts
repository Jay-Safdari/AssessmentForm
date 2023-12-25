import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImmigrationFormData } from '../models/immigration-form-data.model';


@Injectable({
  providedIn: 'root'
})
export class ImmigrationDataService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  submitFormData(formData:  Partial<ImmigrationFormData>) {
    return this.http.post(this.apiUrl, formData);
  }
}
