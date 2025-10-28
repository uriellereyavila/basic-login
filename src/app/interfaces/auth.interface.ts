import { Observable } from "rxjs";
import { Login } from "../models/login.model";
import { Signal } from "@angular/core";
import { User } from "../models/user.model";

export interface IAuthService {
    login(data: Login): Observable<any>;
    logout(): any;
    isLoggedIn: Signal<boolean>;
    currentUser(): Observable<User>;
}