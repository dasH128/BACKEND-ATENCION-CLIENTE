import {Document} from 'mongoose'

export interface IUser extends Document{
    name: string,
    lastname : string,
    username: string,
    email: string,
    password: string,

    encriptarPassword(password: string): Promise<string>,
    compararPassword(password: string): Promise<boolean>
}

// export = IUser