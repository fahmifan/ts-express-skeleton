import { UserRepository } from "./repository";
import { User } from "../model/user";

export class UserRepositoryImpl implements UserRepository {
    public users: [User]

    constructor(){
        this.users = [(new User('miun', 17))]
    }
    
    FindUserByID = (id: number): User => {
        return id >= 0 ? this.users[0] : new User('', 0);
    }
}