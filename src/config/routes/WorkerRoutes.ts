import { Router } from 'express'
import { WorkerController } from '../../app/controller/WorkerController'

class WorkerRoutes {
    public router: Router
    private workerController: WorkerController
    constructor() {
        this.router = Router()
        this.workerController = new WorkerController
        this.routes()
    }

    routes = () => {
        this.router.get('/', this.workerController.listar)
        this.router.post('/', this.workerController.registrate)
    }
}
const workerRoutes = new WorkerRoutes()

export default workerRoutes.router