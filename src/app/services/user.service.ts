import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response'
import { User } from '../interfaces/user'
import { environment } from '../environments/environmentdev';
import { UserSaveData } from '../interfaces/user-save-data';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.endpoint + "user/";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(this.apiUrl);
  }

  saveUser(userData: UserSaveData): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(this.apiUrl, userData);
  }

}
