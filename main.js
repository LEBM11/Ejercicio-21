import Express from 'express';
import Cors from 'cors';
import config from "config.js";
import RoutePruebas from "./router/Pruebas.js";

class Server{
    start(){
        const app = Express()
        app.use(Express.json())
        app.use(Cors())
        app.listen(config.PORT, () => {
            console.log(`Servidor escuchando en el puerto ${config.PORT}`)
        })
        this.app.use("/api/pruebas", new RoutePruebas().config());
        
    }    
}

const server = new Server();
server.start();