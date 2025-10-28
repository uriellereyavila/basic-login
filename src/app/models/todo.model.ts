import { Paginated } from "./paginated-response.model";

export interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface PaginatedTodos extends Paginated {
    todos: Todo[]
}