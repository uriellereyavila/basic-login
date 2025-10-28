import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';

export const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'login', component: LoginComponent }
];
