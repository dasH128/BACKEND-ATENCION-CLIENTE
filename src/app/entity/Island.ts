import { Schema, model } from 'mongoose'

import { IIsland } from './interface/IIsland'

var islandSchema = new Schema({
    nombre: { type: String, required: true },
})




var Island = model<IIsland>("Island", islandSchema)

export = Island
