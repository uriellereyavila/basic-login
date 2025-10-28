import { Observable } from "rxjs";
import { PaginatedUsers, User } from "../../models/user.model";
import { IApiBaseService } from "./base/api-base.interface";
import { Paginated } from "../../models/paginated-response.model";

export interface IUserApiService extends IApiBaseService {
    getAll(params: Paginated): Observable<PaginatedUsers>;
    getById(id: number): Observable<User>;
    add(params: User): Observable<User>;
    update(isCompleted: boolean): Observable<User>
}