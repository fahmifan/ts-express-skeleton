import { Router } from 'express'
import { UserService } from "./httpsvc/service";

class Route {
    constructor(
        public userSvc: UserService
    ){}

    init(): Router {
        const r = Router()
        r.get('/user/:id', this.userSvc.findUser)

        return r
    }
}

export default Route;