import { Request, Response, Router } from "express";

class IndexRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes = () => {
        this.router.get("/", (req, res) =>
            res.send("Hola 👻🤓🧐 la APi: /api/")
        );
    };
}

const routes = new IndexRoutes();

export default routes.router;
