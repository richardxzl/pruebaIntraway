import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = environment.apiURL + 'users/';
  constructor(private http: HttpClient) { }

  public getUser(userId: string): Observable<User> {
    const url = this.baseURL + userId;
    return this.http.get<User>(url);
  }

}
