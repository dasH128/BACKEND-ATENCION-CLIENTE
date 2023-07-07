import { ObjectId } from 'mongodb'
import { IIsland } from '../entity/interface/IIsland'
import Island from '../entity/Island'

export class IslandRepository {
    static LOG: string = 'IslandRepository'

    constructor() {

    }

    listar = async () => {
        var resultados = {}
        try {
            resultados = await Island.find().exec()
        } catch (error) {
            console.log(IslandRepository.LOG, error)
        }
        return resultados;
    }

    listarPorId = async (id: ObjectId) => {
        var resultado = null
        try {
            resultado = await Island.findById(id).exec()
        } catch (error) {
            console.log(IslandRepository.LOG, error)
        }
        return resultado
    }


}