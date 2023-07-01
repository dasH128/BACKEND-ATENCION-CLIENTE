import { Schema, model } from 'mongoose'

import { IPlanning } from './interface/IPlanning'

var planningSchema = new Schema({
    nombre: { type: String, required: false },
    fecha: { type: String, required: false },
    asunto: { type: String, required: false },
    estado: { type: Boolean, required: false, default: true },
    call1: { type: Array, required: false },
    parlo1: { type: Array, required: false },
    call2: { type: Array, required: false },
    parlo2: { type: Array, required: false },
})




var Planning = model<IPlanning>("Planning", planningSchema)

export = Planning
