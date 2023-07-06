import { ObjectId } from 'mongodb'
import { IPlanning } from '../entity/interface/IPlanning'
import Planning from '../entity/Planning'

export class PlanningRepository {
    static LOG: string = 'PlanningRepository'

    constructor() {

    }

    programation = async (id: string, call2: any, parlo2: any) => {
        try {
            // const planning = new Planning(entity)
            var f = await Planning.findByIdAndUpdate(id, {
                "estado": false,
                "call2": call2,
                "parlo2": parlo2,
            });
            console.log('f es', f)
        } catch (error) {
            console.log(PlanningRepository.LOG, error)
            return false
        }
        return true
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
    listar = async (estado?: boolean) => {
        var resultados = {}
        console.log('listar->', estado);
        try {
            if (estado == undefined) {
                resultados = await Planning.find().exec()
            } else {
                resultados = await Planning.find({ estado: estado }).exec()
            }
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