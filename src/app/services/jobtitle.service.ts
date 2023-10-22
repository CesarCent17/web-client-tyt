import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { JobTitle } from '../interfaces/jobtitle';
import { environment } from '../environments/environmentdev';

@Injectable({
  providedIn: 'root'
})
export class JobtitleService{
  private apiUrl: string = environment.endpoint + "jobtitle/";
  constructor(private http: HttpClient) { }
  getJobTitles(): Observable<ApiResponse<JobTitle[]>> {
    return this.http.get<ApiResponse<JobTitle[]>>(this.apiUrl);
  }
}
