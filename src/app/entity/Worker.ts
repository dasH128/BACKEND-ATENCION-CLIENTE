import { Schema, model } from 'mongoose'

import { IWorker } from './interface/IWorker'

var workerSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: false },
    email: { type: String, required: true },
})




var Worker = model<IWorker>("Worker", workerSchema)

export = Worker
