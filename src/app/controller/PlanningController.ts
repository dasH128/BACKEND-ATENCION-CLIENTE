import { Request, Response } from 'express'
import { IPlanning } from '../entity/interface/IPlanning'
import { PlanningRepository } from '../repository/PlanningRepository'
export class PlanningController {
    planningRepository: PlanningRepository

    constructor() {
        this.planningRepository = new PlanningRepository()
    }



    registrate = async (req: Request, res: Response) => {
        var planning: IPlanning = <IPlanning>req.body
        console.log(planning)
        var respuesta = await this.planningRepository.registrar(planning)
        if (!respuesta) return res.json({ status: res.statusCode, operation: respuesta, message: 'Error al crear el usuario' })

        return res.json({ status: res.statusCode, operation: respuesta })
    }

    listar = async (req: Request, res: Response) => {
        var estado: any = req.query.estado ?? 'true';
        console.log('es ', estado);
        var respuesta = await this.planningRepository.listar(Boolean(JSON.parse(estado)));
        return res.json({ status: res.statusCode, operation: respuesta })
    }
    programation = async (req: Request, res: Response) => {
        return res.json({ status: res.statusCode, operation: true })
    }
}