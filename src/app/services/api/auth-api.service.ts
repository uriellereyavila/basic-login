import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../models/login.model';
import { ApiBaseService } from './base/api-base.service';
import { IAuthApiService } from '../../interfaces/api/auth-api.interface';
import { LoginResult } from '../../models/login-result.model';
import { User } from '../../models/user.model';

@Injectable()
export class AuthApiService extends ApiBaseService implements IAuthApiService {
  constructor() {
    super('auth')
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>('user/me');
  }

  login(data: Login): Observable<LoginResult> {
    return this.post('login', data);
  }
}
