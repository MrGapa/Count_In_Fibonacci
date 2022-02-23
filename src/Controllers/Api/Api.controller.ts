import Controller from "../../Interfaces/Controller"
import { Router } from 'express'
import FibonacciContorller from "./Fibonacci.controller"

export class ApiController implements Controller {
    path = '/api'
    router: Router

    private fibonacci: FibonacciContorller

    constructor() {
        this.router = Router()

        this.fibonacci = new FibonacciContorller()

        this.initliazeRoutes()
    }

    private initliazeRoutes() {
        this.router.use(`${this.path}`, this.fibonacci.router)
    }
}