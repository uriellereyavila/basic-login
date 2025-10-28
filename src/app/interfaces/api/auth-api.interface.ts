import { Observable } from "rxjs";
import { IApiBaseService } from "./base/api-base.interface";
import { User } from "../../models/user.model";
import { Login } from "../../models/login.model";
import { LoginResult } from "../../models/login-result.model";

export interface IAuthApiService extends IApiBaseService {
    getCurrentUser(): Observable<User>;
    login(data: Login): Observable<LoginResult>;
}