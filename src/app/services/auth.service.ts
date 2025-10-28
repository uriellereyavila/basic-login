import { computed, effect, Inject, Injectable, Signal, signal } from '@angular/core';
import { IAuthService } from '../interfaces/auth.interface';
import { Observable, of, tap, throwError } from 'rxjs';
import { Login } from '../models/login.model';
import { AUTH_API_SERVICE_TOKEN } from '../service.token';
import { User } from '../models/user.model';
import { IAuthApiService } from '../interfaces/api/auth-api.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private _token = signal<string | null>(null);
  private _user!: Observable<User>;
  readonly isLoggedIn = computed(() => !!this._token());

  constructor(
    @Inject(AUTH_API_SERVICE_TOKEN) private authApiService: IAuthApiService
  ) {
    const token = localStorage.getItem('u_token');
    if (token) {
      this._token.set(token)
    };

    effect(() => {
      const userToken = this._token();
      if (userToken) {
        localStorage.setItem('u_token', userToken)
      }
      else {
        localStorage.removeItem('u_token')
      };
    });
  }

  currentUser(): Observable<User> {
    if (this._user) {
      return this._user;
    } else {
      return this.authApiService.getCurrentUser();
    }
  }


  login(data: Login): Observable<any> {
    return this.authApiService.login(data).pipe(
      tap({
        next: (result) => {
          this._token.set(result.accessToken)
        },
        error: (err) => throwError(() => new Error(err))
      })
    )
  }

  logout(): void {
    this._token.set(null);
  }
}
