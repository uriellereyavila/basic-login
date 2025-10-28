import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const API_BASE_URL: string = 'https://dummyjson.com/'
  const token = localStorage.getItem('u_token');
  const apiReq = req.clone({
    url: `${API_BASE_URL}${req.url}`,
    headers: req  .headers.set('Authorization', `Bearer ${token}`)
  })
  return next(apiReq)
    .pipe(
      catchError((err: HttpErrorResponse): Observable<never> => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            router.navigate(['login'])
          }
        }
        return throwError(() => err);
      })
    );
};
