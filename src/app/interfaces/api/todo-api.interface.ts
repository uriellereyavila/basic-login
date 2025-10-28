import { Observable } from "rxjs";
import { Paginated } from "../../models/paginated-response.model";
import { PaginatedTodos, Todo } from "../../models/todo.model";
import { IApiBaseService } from "./base/api-base.interface";

export interface ITodoApiService extends IApiBaseService {
    getAll(params: Paginated): Observable<PaginatedTodos>;
    getById(id: number): Observable<Todo>;
    add(params: Todo): Observable<Todo>;
    update(isCompleted: boolean): Observable<Todo>
}