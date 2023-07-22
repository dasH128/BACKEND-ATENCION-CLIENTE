import { Request, Response } from 'express'
import { crearToken } from '../util/token'
import { IUser } from '../entity/interface/IUser'
import { UserRepository } from '../repository/UserRepository'
export class AuthController {
    userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    login = async (req: Request, res: Response) => {
        var user: IUser = <IUser>req.body
        console.log(user)
        var userDB = await this.userRepository.buscarPorUserName(user.email)
        if (!userDB) return res.json({ auth: false, message: "El username no existe" })

        var validate = await userDB.compararPassword(user.password)
        if (!validate) return res.json({ auth: false, message: "Constraseña incorrecta" })

        const token = await crearToken(userDB)
        return res.json({ auth: true, token, rol: userDB.rol })
    }

    registrate = async (req: Request, res: Response) => {
        var user: IUser = <IUser>req.body

        var respuesta = await this.userRepository.registrar(user)
        if (!respuesta) return res.json({ status: res.statusCode, operation: respuesta, message: 'Error al crear el usuario' })

        const userBD = await this.userRepository.buscarPorUserName(user.username)
        const token = await crearToken(userBD)
        return res.json({ status: res.statusCode, operation: respuesta, token })
    }

    autenticacion = async (req: Request, res: Response) => {

        const user = await this.userRepository.listarPorId(req.params.id as any)
        if (!user) return res.status(404).send('Usuario no encontrado')

        return res.json({ auth: true, user })
    }

}