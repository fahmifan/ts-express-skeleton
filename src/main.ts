import express from 'express';
import Route from "./route";
import { UserService } from './httpsvc/service';
import { UserRepositoryImpl } from './repository/user_repository_impl';

const app = express();

app.get('/ping', (req, res) => res.status(200).json({"message": "pong"}))

const userRepo = new UserRepositoryImpl()
const userSvc = new UserService(userRepo) 
const route = new Route(userSvc)

app.use('/api', route.init())

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))
