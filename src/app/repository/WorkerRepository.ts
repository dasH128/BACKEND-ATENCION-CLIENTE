import { ObjectId } from 'mongodb'
import { IWorker } from '../entity/interface/IWorker'
import Worker from '../entity/Worker'

export class WorkerRepository {
    static LOG: string = 'WorkerRepository'

    constructor() {

    }

    registrar = async (entity: IWorker) => {
        try {
            console.log(entity)
            const worker = new Worker(entity)
            var dniExist = await Worker.find({ dni: entity.dni });
            console.log('worker dni--->', dniExist);
            if (dniExist.length > 0) return 'dni existente';
            var correoExist = await Worker.find({ correo: entity.correo });
            console.log('worker correo--->', correoExist);
            if (correoExist.length > 0) return 'correo existente';

            var f = await worker.save()
            console.log('f es', f)
        } catch (error: any) {
            console.log(WorkerRepository.LOG, error)
            return error.toString()
        }
        return ''
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
    listarByIsla = async (filter: String) => {
        var resultados = {}
        try {
            resultados = await Worker.find({ 'isla': filter }).exec()
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