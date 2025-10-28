import { Injectable } from '@angular/core';
import { ApiBaseService } from './base/api-base.service';
import { IUserApiService } from '../../interfaces/api/user-api.interface';
import { Observable } from 'rxjs';
import { Paginated } from '../../models/paginated-response.model';
import { PaginatedUsers, User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiBaseService implements IUserApiService {
  constructor() {
    super('users');
  }

  add(params: User): Observable<User> {
    return this.post('', params);
  }

  update(isCompleted: boolean = false): Observable<User> {
    return this.put('', { isCompleted });
  }

  getAll(params?: Paginated): Observable<PaginatedUsers> {
    return this.get('', params);
  }

  getById(id: number): Observable<User> {
    return this.get('' + id, undefined);
  }

}
