import { Request, Response } from 'express'
import { IIsland } from '../entity/interface/IIsland'
import { IslandRepository } from '../repository/IslandRepository'
export class IslandController {
    islandRepository: IslandRepository

    constructor() {
        this.islandRepository = new IslandRepository()
    }


    listar = async (req: Request, res: Response) => {
        var respuesta = await this.islandRepository.listar();
        return res.json({ status: res.statusCode, operation: respuesta })
    }

}