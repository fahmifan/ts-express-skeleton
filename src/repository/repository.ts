import { User } from "../model/user";

export interface UserRepository {
    FindUserByID(id: number): User
}