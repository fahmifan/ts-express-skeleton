import { Request, Response } from 'express';
import { User } from '../model/user';
import { UserRepository } from "../repository/repository";

export class UserService {
    constructor(public userRepo: UserRepository) {}

    findUser = (req: Request, res: Response) => {
        console.log("user repo", this.userRepo)
        let id: any = req.params.id
        const user =  this.userRepo.FindUserByID(id)

        res.status(200).json(user)
    }
}
