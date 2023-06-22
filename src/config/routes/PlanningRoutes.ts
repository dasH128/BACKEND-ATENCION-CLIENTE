import { Router } from 'express'
import { PlanningController } from '../../app/controller/PlanningController'

class PlanningRoutes {
    public router: Router
    private planningController: PlanningController
    constructor() {
        this.router = Router()
        this.planningController = new PlanningController
        this.routes()
    }

    routes = () => {
        this.router.get('/', this.planningController.listar)
        this.router.post('/', this.planningController.registrate)
    }
}
const planningRoutes = new PlanningRoutes()

export default planningRoutes.router