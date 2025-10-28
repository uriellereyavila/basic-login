import { Observable } from "rxjs";

export interface IApiBaseService {
    get<T>(url: string, data: any): Observable<T>
    
    post<T>(url: string, data: any): Observable<T>
}