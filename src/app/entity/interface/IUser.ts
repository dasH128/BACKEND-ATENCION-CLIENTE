import { Document } from 'mongoose'

export interface IUser extends Document {
    name: string,
    rol: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    activo: boolean,
    encriptarPassword(password: string): Promise<string>,
    compararPassword(password: string): Promise<boolean>
}

// export = IUser