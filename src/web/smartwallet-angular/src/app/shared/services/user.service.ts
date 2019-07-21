import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from './app.config';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient, private appconfig: AppConfig) {
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.appconfig.settings.apiServer.authentication}/user`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appconfig.settings.apiServer.authentication}/user/items`);
  }
}
