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
        if (!respuesta) return res.json({ status: res.statusCode, operation: respuesta, message: 'Error al crear el usuario' })

        return res.json({ status: res.statusCode, operation: respuesta })
    }

    listar = async (req: Request, res: Response) => {
        var respuesta = await this.workerRepository.listar();
        return res.json({ status: res.statusCode, operation: respuesta })
    }

}