import { Router } from 'express'
import { AuthController } from '../../app/controller/AuthController'
import { verificarToken } from '../../app/util/token'

class AuthRoutes {
    public router: Router
    private accountController: AuthController
    constructor() {
        this.router = Router()
        this.accountController = new AuthController
        this.routes()
    }

    routes = () => {
        this.router.get('/', verificarToken, this.accountController.autenticacion)
        this.router.post('/login', this.accountController.login)
        this.router.post('/registrate', this.accountController.registrate)
    }
}
const accountRoutes = new AuthRoutes()

export default accountRoutes.router