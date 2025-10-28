import { Injectable } from '@angular/core';
import { ApiBaseService } from './base/api-base.service';
import { ITodoApiService } from '../../interfaces/api/todo-api.interface';
import { Observable } from 'rxjs';
import { Paginated } from '../../models/paginated-response.model';
import { PaginatedTodos, Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService extends ApiBaseService implements ITodoApiService {
  constructor() {
    super('todos');
  }

  add(params: Todo): Observable<Todo> {
    return this.post('', params);
  }

  update(isCompleted: boolean = false): Observable<Todo> {
    return this.put('', { isCompleted });
  }

  getAll(params?: Paginated): Observable<PaginatedTodos> {
    return this.get<PaginatedTodos>('', params);
  }

  getById(id: number): Observable<Todo> {
    return this.get('' + id, undefined);
  }
}
