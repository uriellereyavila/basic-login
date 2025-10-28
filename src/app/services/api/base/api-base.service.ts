import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { IApiBaseService } from "../../../interfaces/api/base/api-base.interface";

@Injectable()
export class ApiBaseService implements IApiBaseService {
  protected http = inject(HttpClient);

  constructor(
    @Inject('controller') protected controller: string
  ) {
  }
  
  get<T>(url: string, data: any): Observable<any> {
    return this.http.get<T>(`${this.controller}/${url}`, data).pipe(
      catchError(this.handleError)
    );
  }


  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.controller}/${url}`, data).pipe(
      catchError(this.handleError)
    )
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.controller}/${url}`, data).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    errorMessage = error.error.message
    return throwError(() => new Error(errorMessage));
  }
}
