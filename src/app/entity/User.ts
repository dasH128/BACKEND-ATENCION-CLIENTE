import { Schema, model } from 'mongoose'
import { genSalt, hash, compare } from 'bcryptjs'

import { IUser } from './interface/IUser'

var userSchema = new Schema({
    name: { type: String, required: true },
    rol: { type: String, required: false },
    lastname: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    activo: { type: Boolean, required: false, default: true },
})

userSchema.methods.encriptarPassword = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    return hash(password, salt);
};

userSchema.methods.compararPassword = async function (password: string): Promise<boolean> {
    return await compare(password, this.password)
}

var User = model<IUser>("User", userSchema)

export = User
