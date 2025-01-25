import Express, {Router} from 'express';
import Cors from 'cors';
import config from "./config.js";
import RoutePruebas from "./Router/Pruebas.js";

class Server{
    start = () => {
        const app = Express()
        app.use(Express.json())
        app.use(Cors())
        app.listen(config.PORT, () => {
            console.log(`Servidor escuchando en el puerto http://localhost:${config.PORT}`)
        })
        app.use("/",(req, res)=>{
            res.json(
                "si quieres ver los objetos completos, usa esta ruta: http://localhost:3210/api/pruebas/Todo"
                )})
        console.log("si quieres ver los objetos completos, usa esta ruta: http://localhost:3210/api/pruebas/Todo")
        app.use("/api/pruebas", new RoutePruebas().config());
    }    
}

const server = new Server();
server.start();