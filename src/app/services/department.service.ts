import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Department } from '../interfaces/department';
import { environment } from '../environments/environmentdev';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService{
  private apiUrl: string = environment.endpoint + "department/";
  constructor(private http: HttpClient) { }
  getDepartments(): Observable<ApiResponse<Department[]>> {
    return this.http.get<ApiResponse<Department[]>>(this.apiUrl);
  }
}
