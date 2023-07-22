import { Schema, model } from 'mongoose'

import { IWorker } from './interface/IWorker'

var workerSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    isla: { type: String, required: false },
})




var Worker = model<IWorker>("Worker", workerSchema)

export = Worker
