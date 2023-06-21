import { ObjectId } from 'mongodb'
import { IWorker } from '../entity/interface/IWorker'
import Worker from '../entity/Worker'

export class WorkerRepository {
    static LOG: string = 'WorkerRepository'

    constructor() {

    }

    registrar = async (entity: IWorker) => {
        try {
            const worker = new Worker(entity)
            var f = await worker.save()
            console.log('f es', f)
        } catch (error) {
            console.log(WorkerRepository.LOG, error)
            return false
        }
        return true
    }
    actualizar = async (entity: IWorker) => false
    eliminar = async (id: ObjectId) => false
    listar = async () => {
        var resultados = {}
        try {
            resultados = await Worker.find().exec()
        } catch (error) {
            console.log(WorkerRepository.LOG, error)
        }
        return resultados;
    }

    listarPorId = async (id: ObjectId) => {
        var resultado = null
        try {
            resultado = await Worker.findById(id).exec()
        } catch (error) {
            console.log(WorkerRepository.LOG, error)
        }
        return resultado
    }


}