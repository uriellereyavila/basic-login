import { User } from "./user.model";

export interface LoginResult extends User {
    id: number;
    username: string;
    accessToken: string;
}