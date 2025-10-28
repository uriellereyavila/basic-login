import { InjectionToken } from "@angular/core";
import { IAuthService } from "./interfaces/auth.interface";
import { IAuthApiService } from "./interfaces/api/auth-api.interface";
import { AuthApiService } from "./services/api/auth-api.service";
import { AuthService } from "./services/auth.service";
import { ITodoApiService } from "./interfaces/api/todo-api.interface";
import { TodoApiService } from "./services/api/todo-api.service";

export const AUTH_SERVICE_TOKEN = new InjectionToken<IAuthService>('AuthService');
export const AUTH_API_SERVICE_TOKEN = new InjectionToken<IAuthApiService>('AuthApiService');
export const TODO_API_SERVICE_TOKEN = new InjectionToken<ITodoApiService>('AuthApiService');

export const SERVICE_TOKEN_COLLECTIONS = [
    {
      provide: AUTH_SERVICE_TOKEN, 
      useClass: AuthService 
    },
    {
      provide: AUTH_API_SERVICE_TOKEN, 
      useClass: AuthApiService
    },
    {
      provide: TODO_API_SERVICE_TOKEN, 
      useClass: TodoApiService 
    }
]