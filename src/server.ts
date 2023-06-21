import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import { PORT, MONGO_URI } from "./config/config";

import indexRoutes from "./config/routes/index";
import AuthRoutes from "./config/routes/AuthRoutes";
import WorkerRoutes from "./config/routes/WorkerRoutes";

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config = () => {

        // mongoose.set('useFindAndModify', true)
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            // useNewUrlParser:true,
            // useCreateIndex:true,
        })
            .then((db) => console.log('DB is connect'))
            .catch(e => console.log(e, ' Error'))

        // setting
        this.app.set("port", process.env.PORT || PORT);
        // middlewares
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(compression());
        this.app.use(cors());
    };
    routes = () => {
        this.app.use(indexRoutes);
        this.app.use("/api/auth", AuthRoutes);
        this.app.use("/api/worker", WorkerRoutes);
    };
    start = () => {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    };
}
