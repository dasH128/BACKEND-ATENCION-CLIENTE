import { ObjectId } from 'mongodb'
import { IPlanning } from '../entity/interface/IPlanning'
import Planning from '../entity/Planning'

export class PlanningRepository {
    static LOG: string = 'PlanningRepository'

    constructor() {

    }

    registrar = async (entity: IPlanning) => {
        try {
            const planning = new Planning(entity)
            var f = await planning.save()
            console.log('f es', f)
        } catch (error) {
            console.log(PlanningRepository.LOG, error)
            return false
        }
        return true
    }
    // actualizar = async (entity: IP) => false
    // eliminar = async (id: ObjectId) => false
    listar = async () => {
        var resultados = {}
        try {
            resultados = await Planning.find().exec()
        } catch (error) {
            console.log(PlanningRepository.LOG, error)
        }
        return resultados;
    }

    listarPorId = async (id: ObjectId) => {
        var resultado = null
        try {
            resultado = await Planning.findById(id).exec()
        } catch (error) {
            console.log(PlanningRepository.LOG, error)
        }
        return resultado
    }


}