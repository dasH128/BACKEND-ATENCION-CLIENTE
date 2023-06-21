import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { IToken } from '../entity/interface/IToken'
import { SECRET_TOKEN } from '../../config/config'
import { ObjectId } from 'mongodb';

const crearToken = async (user: any): Promise<String> => {
    const id: ObjectId = user._id
    const payload = {
        id: id
    }
    const options = {
        expiresIn: 60 * 60 * 24,
    }
    const token = await jwt.sign(payload, SECRET_TOKEN, options)
    return token
}

const decodificarToken = (token: string): Object => {
    const decodificado = jwt.verify(token, SECRET_TOKEN)
    return decodificado
}

const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.headers['x-access-token']
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'Token no proporcionado'
        })
    }

    try {
        const decodificado = jwt.verify(token, SECRET_TOKEN)
        req.params.id = (decodificado as IToken).id
    } catch (error) {
        return res.status(401).json({
            auth: false,
            message: 'Token no valido'
        })
    }

    next()
}

export {
    crearToken,
    decodificarToken,
    verificarToken
} 