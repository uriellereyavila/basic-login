import { Component, Inject, OnInit } from '@angular/core';
import { AUTH_SERVICE_TOKEN } from '../service.token';
import { Router } from '@angular/router';
import { IAuthService } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-default',
    imports: [AsyncPipe],
    templateUrl: './default.component.html',
    styles: ``
})
export class DefaultComponent implements OnInit {
  currentUser$!: Observable<User>

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) public authService: IAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser$ = this.authService.currentUser()
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
