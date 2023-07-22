import { Request, Response } from 'express'
import { IWorker } from '../entity/interface/IWorker'
import { WorkerRepository } from '../repository/WorkerRepository'
export class WorkerController {
    workerRepository: WorkerRepository

    constructor() {
        this.workerRepository = new WorkerRepository()
    }



    registrate = async (req: Request, res: Response) => {
        var worker: IWorker = <IWorker>req.body
        
        var respuesta = await this.workerRepository.registrar(worker)
        // if (!respuesta) return res.json({ status: res.statusCode, operation: respuesta, message: 'Error al crear el usuario' })
        if (respuesta != '') return res.json({ status: res.statusCode, operation: false, message: respuesta })

        return res.json({ status: res.statusCode, operation: true })
    }

    listar = async (req: Request, res: Response) => {
        var respuesta = await this.workerRepository.listar();
        return res.json({ status: res.statusCode, operation: respuesta })
    }

    listarByIsla = async (req: Request, res: Response) => {

        var filter: any = req.query.filter ?? null;
        console.log('filter ', filter);
        if (filter == 'TODOS') {

            var respuesta = await this.workerRepository.listar();
            return res.json({ status: res.statusCode, operation: respuesta })
        } else {

            var respuesta = await this.workerRepository.listarByIsla(filter);
            return res.json({ status: res.statusCode, operation: respuesta })
        }
    }
}