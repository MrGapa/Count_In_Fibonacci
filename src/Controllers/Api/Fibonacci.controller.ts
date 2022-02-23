import Controller from "../../Interfaces/Controller"
import { Router, Request, Response } from 'express'
import calculateFibonacci from "../../Lib/Fibonacci"

export default class FibonacciContorller implements Controller {
    path = '/fibonacci'
    router: Router

    constructor() {
        this.router = Router()

        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.getFibonaccio)
    }

    private getFibonaccio(req: Request, res: Response) {
        const { id } = req.params
        
        res.json({"answer": calculateFibonacci(parseInt(id))})
    }
}