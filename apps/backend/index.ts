import { Contract } from "./src/contract";
import { Pipe } from "./src/pipe";
import express, { Express, Request, Response } from 'express';

interface Ownership {
  [key: string]: any
}

let totalPipes = 0;
let pipeOwners:Ownership = {}

const app: Express = express()

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.get('/own', function (req: Request, res: Response) {
  res.send('Success');
  pipeOwners[totalPipes] = req.body.owner;
  totalPipes++;
})

app.get('/own', function (req: Request, res: Response) {
  res.send('Success');
  pipeOwners[totalPipes] = req.body.owner;
  totalPipes++;
})

app.listen(3000)
console.log("Listen port 3000")