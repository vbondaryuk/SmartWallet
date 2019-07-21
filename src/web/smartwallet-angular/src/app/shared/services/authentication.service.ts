import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

import {UserRegistration} from '../models/user.registration';
import {UserLogin} from '../models/user.login';
import {AppConfig} from './app.config';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private tokenSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient, private appconfig: AppConfig) {
    this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('jwt_token'));
  }

  public login(userCredential: UserLogin) {
    return this.http.post<any>(`${this.appconfig.settings.apiServer.authentication}/auth/authenticate`, userCredential)
      .pipe(map(this.authResponseMap));
  }

  public register(userRegistration: UserRegistration) {
    return this.http.post<any>(`${this.appconfig.settings.apiServer.authentication}/auth/register`, userRegistration)
      .pipe(map(this.authResponseMap));
  }

  public refreshToken() {
    // todo add
  }

  public logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('jwt_refreshToken');
    this.tokenSubject.next(null);
  }

  public get token() {
    return this.tokenSubject.value;
  }

  public get isLoggedIn(): boolean {
    return !!this.tokenSubject.value;
  }

  private authResponseMap = token => {
    if (token) {
      localStorage.setItem('jwt_token', token.token);
      localStorage.setItem('jwt_refreshToken', token.refreshToken);
      this.tokenSubject.next(token.token);
    }

    return token;
  }
}
