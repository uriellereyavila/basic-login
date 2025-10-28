import { Paginated } from "./paginated-response.model";

export interface User {
    firstName: string;
    lastName: string;
}

export interface PaginatedUsers extends Paginated {
    users: User[]
}