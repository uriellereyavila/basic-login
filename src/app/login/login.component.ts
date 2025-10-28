import { Component, computed, effect, Inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAuthService } from '../interfaces/auth.interface';
import { LoginResult } from '../models/login-result.model';
import { finalize, tap } from 'rxjs';
import { AUTH_SERVICE_TOKEN } from '../service.token';

import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [
    ReactiveFormsModule
],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private _loading = signal<boolean>(false);
  private _errorMsg = signal<string>("");

  protected form!: FormGroup;
  protected readonly loading = computed(() => this._loading())
  protected readonly errorMsg = computed(() => this._errorMsg())

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private authService: IAuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    effect(() => {
      const isLoading = this._loading();
      if (isLoading) this.form.disable();
      else this.form.enable()
    })
  }

  get username(): AbstractControl<any, any> | null {
    return this.form.get('username');
  }

  get password(): AbstractControl<any, any> | null {
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.initializeForm();
    const isLoggedIn = this.authService.isLoggedIn();

    if (isLoggedIn) {
      console.log(this.authService.isLoggedIn())
      this.router.navigate(['/'])
    }
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    this.form.markAsDirty();
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this._errorMsg.set('')
      this._loading.set(true);

      this.authService.login(this.form.value).pipe(
        finalize(() => {
          this._loading.set(false);
        })
      ).subscribe({
        next: () => {
          this.router.navigate(['/'])
        },
        error: (err) => {
          this._errorMsg.set(err)
        }
      });
    }
  }
}
